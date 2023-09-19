// models/Plan.js
const mongoose = require('mongoose');

const planUserSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" , unique: true},
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('PlanUser', planUserSchema);
