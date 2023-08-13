const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/movieDB";
const APIRouter = require("./routes/APIRoutes");
const path = require("path");

app.use("/", APIRouter);

app.get("/api/video", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

mongoose.set("strictQuery", true); // to suppress node:5984 [MONGOOSE] deprecation warning

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log("unable to connect with database");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("server port is running", PORT);
});
