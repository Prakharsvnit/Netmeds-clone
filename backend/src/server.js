const path = require("path");
const express = require("express");

const connect = require("./configs/db");

const medController = require("./controllers/med.cont");
const mediController = require("./controllers/medicine.cont");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "models")));
app.set("views", path.join(__dirname, "models/"));
app.set("view engine", "ejs");
app.use("/medicine", medController);
app.use("/meds", mediController);

app.listen(3200, async () => {
  await connect();
  console.log("Listening on port 3200");
});
