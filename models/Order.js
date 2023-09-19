const mongoose = require("mongoose");
const User = require("./User");
const Cart = require("./Cart");
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
