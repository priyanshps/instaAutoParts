const mongoose = require('mongoose');

const durationEnum = ['1-month', '3-months', '6-months'];
const planSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration : { type: String, enum: durationEnum,  required: true }
});

module.exports = mongoose.model('Plan', planSchema);
