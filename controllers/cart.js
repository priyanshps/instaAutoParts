//createCart, updateCart, deleteCart, getCartById, getAllCarts, getCartByUserId
const Cart = require("../models/Cart");

exports.createCart = async (req, res) => {
    const {products} = req.body
    const newCart = new Cart({
        userId: req.user.id,
        products
    });
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find({ userId: req.params.id });
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
}

