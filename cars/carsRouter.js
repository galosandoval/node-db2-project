const express = require("express");
const db = require("../data/connection");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.status(200).json({ data: cars });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .returning("id")
    .then((carData) => {
      res.status(201).json({ data: carData });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});
module.exports = router;
