const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const Cart = require("../models/Cart");
const { createCart, updateCart, deleteCart, getCartById, getAllCarts, getCartByUserId } = require("../controllers/cart");

// CREATE
router.post("/", verifyToken, createCart)

// UPDATE
router.put("/:id", verifyToken, updateCart)

// DELETE
router.delete("/:id", verifyToken, deleteCart)

// GET Cart
router.get("/find/:id", verifyToken, getCartById)

// GET ALL Carts by user id
router.get("/find/all/:id", verifyToken, getAllCarts)

// GET ALL Carts by user id
router.get("/find/:id", verifyToken, getCartByUserId)



module.exports = router;