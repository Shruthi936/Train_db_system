const express = require("express");
const router = express.Router();
const Train = require("../models/Train");

router.get("/", async (req, res) => {
  const trains = await Train.find();
  res.json(trains);
});

router.post("/", async (req, res) => {
  const train = new Train({ name: req.body.name });
  await train.save();
  res.status(201).json(train);
});

module.exports = router;