const router = require("express").Router();
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
    updateAdvertisement,
    addReview,
    getReview,
    getAllReviews,
    deleteReview,
    updateReview
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
router.get("/advertisement/all/:id", verifyTokenAndAdmin, getAllAdvertisement)

// UPDATE Advertisement post by ad id
router.put("/advertisement/:id", verifyTokenAndAdmin, updateAdvertisement)

//Add review
router.post("/review/:id", verifyToken, addReview)

//Get review
router.get("/review/:id", verifyToken, getReview)

//Get all reviews
router.get("/review/all/:id", verifyToken, getAllReviews)

//Delete review
router.delete("/review/:id", verifyToken, deleteReview)

//Update review
router.put("/review/:id", verifyToken, updateReview)

module.exports = router;