const express = require("express");

const router = express.Router();

const Medicinedrop = require("../models/medicine.js");

router.post("/medicine", async (req, res) => {
  const meds = await Medicinedrop.create(req.body);
  return res.send(meds);
});
router.get("/", async function (req, res) {
  const meds = await Medicinedrop.find().lean().exec();
  res.send(meds);
});
module.exports = router;
