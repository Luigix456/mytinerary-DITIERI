const mongoose = require('mongoose');

const itinerariesSchema = new mongoose.Schema ({
    image: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageUser: {type: String, required: true},
    userName: {type: String, required: true},
    price: {type: Number, required: true},
    hours: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags: {type: Array, required: true},
    comments: {type: Array, required: true},
    activities: {type: Array, required: true},
    cityId: [{type: mongoose.Types.ObjectId, ref: 'cities'}]
});

const itineraries = mongoose.model('itineraries', itinerariesSchema);
module.exports = itineraries;