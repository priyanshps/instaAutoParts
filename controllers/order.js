//createOrder, updateOrder, deleteOrder, getOrderById, getAllOrders, getOrderByUserId
const Order = require("../models/Order");
const User = require("../models/User");
const Cart = require("../models/Cart");

// CREATE
exports.createOrder = async (req, res) => {
    const { address } = req.body
    const newOrder = new Order({
        userId: req.user.id,
        cartId: req.params.id,
        address
    });
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

// UPDATE
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

// GET Order
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
}

// GET ALL Orders by user id
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

// GET ALL Orders by user id
exports.getOrderByUserId = async (req, res) => {
    try {
        const order = await Order.findOne({ userId: req.params.id });
        res.status(200).json(order);
    }catch(err){
        res.status(500).json(err);
    }
}
