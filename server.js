const express = require("express");
const app = express();
const fetch = require("node-fetch");
var url = require("url");
const redis = require("redis");
const path = require("path");
require("dotenv").config();
const api_key = process.env.IG_APP_API_KEY;

const port = process.env.PORT || 5000;

// create and connect redis client to local instance.
var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true
});
client.auth(redisURL.auth.split(":")[1]);

// echo redis errors to the console
client.on("error", err => {
  console.log("Error " + err);
});

// get photos list
app.get("/ig_photos", (req, res) => {
  // key to store results in Redis store
  const photosRedisKey = "user:photos";

  // Try fetching the result from Redis first in case we have it cached
  return client.get(photosRedisKey, (err, photos) => {
    // If that key exists in Redis store
    if (photos) {
      return res.json({ source: "cache", data: JSON.parse(photos) });
    } else {
      // Key does not exist in Redis store

      // Fetch directly from remote api
      fetch(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${api_key}`
      )
        .then(response => response.json())
        .then(photos => {
          // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour
          client.setex(photosRedisKey, 3600, JSON.stringify(photos));

          // Send JSON response to client
          return res.json({ source: "api", data: photos });
        })
        .catch(error => {
          // log error message
          console.log(error);
          // send error to the client
          return res.json(error.toString());
        });
    }
  });
});

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
