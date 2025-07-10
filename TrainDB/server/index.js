const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const trainRoutes = require("./routes/trains");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/traindb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/trains", trainRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));