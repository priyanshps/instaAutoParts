const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");

// CREATE
exports.stripePayment = async (req, res) => {
    stripe.charges.create(
        {
          source: req.body.tokenId,
          amount: req.body.amount,
          currency: "usd",
        },
        (stripeErr, stripeRes) => {
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            res.status(200).json(stripeRes);
          }
        }
      );
}
