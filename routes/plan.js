const express = require('express');
const router = express.Router();
const {createPlan, createPlan , userPlanMapping} = require('../controllers/plan.js');

// Create a new plan
router.post('/plans', createPlan);

// Get all plans
router.get('/plans', createPlan);

// user and plan mapping
router.post('/userplan', userPlanMapping);

module.exports = router;
