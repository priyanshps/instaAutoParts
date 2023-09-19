const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    title: { type: String, required: true },
    offerDesc: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Advertisement", AdSchema);
