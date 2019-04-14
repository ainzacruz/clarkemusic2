const express = require("express");
const app = express();
const fetch = require("node-fetch");
const redis = require("redis");
require("dotenv").config();
const api_key = process.env.IG_APP_API_KEY;

// create and connect redis client to local instance.
const client = redis.createClient();

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

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// start express server at 3000 port
app.listen(3001, () => {
  console.log("Server listening on port: ", 3001);
});
