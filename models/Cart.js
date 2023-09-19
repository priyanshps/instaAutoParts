const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: {
        productIds: [{
          type: String,
        }],
        totalAmount: {
          type: Number,
          required: true,
        },
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
