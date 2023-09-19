const express = require('express');
const router = express.Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const {createPlan , userPlanMapping} = require('../controllers/plan.js');

// Create a new plan
router.post('/create', verifyToken, createPlan);

// user and plan mapping
router.post('/create/map',verifyToken, userPlanMapping);



module.exports = router;
