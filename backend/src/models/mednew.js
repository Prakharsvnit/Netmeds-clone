const mongoose = require("mongoose");

const medSchema = new mongoose.Schema(
  {
    Char: { type: String, required: true },
    MedicineName: { type: String, required: true },
    Prescription: { type: String, required: true },
    TypeofSell: { type: String, required: true },
    MRP: { type: String, required: true },
    img_m: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Medicine = mongoose.model("medicine", medSchema);

module.exports = Medicine;
