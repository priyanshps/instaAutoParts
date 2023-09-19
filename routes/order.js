const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const Order = require("../models/Order");
const { createOrder, updateOrder, deleteOrder, getOrderById, getAllOrders, getOrderByUserId } = require("../controllers/order");

// CREATE
router.post("/:id", verifyToken, createOrder)

// UPDATE
router.put("/:id", verifyToken, updateOrder)

// DELETE
router.delete("/:id", verifyToken, deleteOrder)

// GET Order
router.get("/find/:id", verifyToken, getOrderById)

// GET ALL Orders by user id
router.get("/find/all/:id", verifyToken, getAllOrders)



module.exports = router;
