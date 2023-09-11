// models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Plan', planSchema);
