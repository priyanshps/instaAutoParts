const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../helper/verifyToken");
const { updateUser, deleteUser, getUserById, getAllUsers} = require("../controllers/user");


// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser)

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)

// GET USER
router.get("/find/:id", verifyTokenAndAuthorization, getUserById)

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, getAllUsers)



module.exports = router;