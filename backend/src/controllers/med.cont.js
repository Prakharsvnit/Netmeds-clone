const express = require("express");

const router = express.Router();

const Medicine = require("../models/mednew.js");

router.post("/med", async (req, res) => {
  const meds = await Medicine.create(req.body);
  return res.send(meds);
});
router.get("/", async function (req, res) {
  const meds = await Medicine.find().lean().exec();
  res.send(meds);
});
router.get("/:md", async function (req, res) {
  const meds = await Medicine.find().lean().exec();
  // let x = meds.MedicineName
  // console.log(req.params.md);
  // console.log(meds);
  var arr = [];
  meds.forEach((item) => {
    const s = item.MedicineName.toLowerCase();
    // console.log(s);
    const n = s.slice(0, req.params.md.length);
    // console.log(n);
    if (n == req.params.md.toLowerCase()) {
      arr.push(item);
    }
  });
  // res.send(meds);
  res.send(arr);
});

module.exports = router;
