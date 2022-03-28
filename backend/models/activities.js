
const mongoose = require("mongoose");


const activitiesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },   
    description: { type: String, required: true },
    itineraryId: {type: mongoose.Schema.Types.ObjectId, ref: 'itinerarios'} 
  });
  const activities = mongoose.model("activities", activitiesSchema);
  module.exports = activities;