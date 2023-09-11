// controllers/planController.js
const Plan = require('../models/Plan');
const PlanUserMapping = require('../models/PlanUserMapping');

// Create a new plan
exports.createPlan = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const newPlan = new Plan({ name, description, price, duration });
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.userPlanMapping = async (req, res) => {
    const { userId, planId } = req.body;
    const newPlanMapping = new PlanUserMapping({ userId, planId});
    try {
        const savedPlanMapping = await newPlanMapping.save();
        res.status(201).json(savedPlanMapping);
    }catch(error){
        res.status(500).json({ error: error.message });
    }

}