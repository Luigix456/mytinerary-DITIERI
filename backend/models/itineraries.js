const mongoose = require('mongoose');

const itinerariesSchema = new mongoose.Schema ({
    image: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageUser: {type: String, required: true},
    userName: {type: String, required: true},
    price: {type: Number, required: true},
    hours: {type: Number, required: true},
    likes: {type: Array},
    hashtags: {type: Array, required: true},
    comments:[{
        comment: {type: String},
        userID: {type:mongoose.Types.ObjectId, ref:"users"},
    }],
    activities: {type: Array, required: true},
    cityId: [{type: mongoose.Types.ObjectId, ref: 'cities'}]
});

const itineraries = mongoose.model('itineraries', itinerariesSchema);
module.exports = itineraries;