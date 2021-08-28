const mongoose = require("mongoose");

const medSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    d_price: { type: String, required: true },
    disease: { type: String, required: true },
    dose: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Medicinedrop = mongoose.model("medicine_drop", medSchema);

module.exports = Medicinedrop;
