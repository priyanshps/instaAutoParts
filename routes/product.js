const router = require("express").Router();
const User = require("../models/Product");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getAllProducts,
    createAdvertisement, 
    getAdvertisement,
    getAllAdvertisement,
    updateAdvertisement
} = require("../controllers/product");

// CREATE
router.post("/", verifyTokenAndAdmin, createProduct)

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct)

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct)

// GET Product
router.get("/find/:id", getProductById)

// GET ALL Products by user id
router.get("/find/all/:id", getAllProducts)

// CREATE Advertisement post 
router.post("/advertisement/create", verifyTokenAndAdmin, createAdvertisement)

// GET Advertisement post
router.get("/advertisement/:id", verifyTokenAndAdmin, getAdvertisement)

// GET ALL Advertisement posts by user id
router.get("/advertisement/:id", verifyTokenAndAdmin, getAllAdvertisement)

// UPDATE Advertisement post by ad id
router.put("/advertisement/:id", verifyTokenAndAdmin, updateAdvertisement)


module.exports = router;