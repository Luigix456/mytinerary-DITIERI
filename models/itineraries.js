const mongoose = require('mongoose');


const itinerariesSchema = new mongoose.Schema ({
    /* image: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    imageUser: {type: String, required: true},
    description: { type: String, required: true },
    price: { type: String, required: true },
    hours: { type: String, required: true },
    hashtag: [{ type: String, required: true }],
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'}, 
    likes: {type: Array},
    comments:[{
        comment: {type: String},
        userID: {type:mongoose.Types.ObjectId, ref:"users"},
    }], */
    image: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageUser: {type: String, required: true},
    userName: {type: String, required: true},
    price: {type: Number, required: true},
    hours: {type: Number, required: true},
   /*  likes: {type: Array}, */
    hashtags: {type: Array, required: true},
    imageAct1: {type: String, required: true},
    imageAct2: {type: String, required: true},
    imageAct3: {type: String, required: true},
    descAct1: {type: String, required: true},
    descAct2: {type: String, required: true},
    descAct3: {type: String, required: true},
    cityId: [{type: mongoose.Types.ObjectId, ref: 'cities'}],
    comments:[{
        comment: {type: String},
        userID: {type:mongoose.Types.ObjectId, ref:"users"},
    }],
});

const itineraries = mongoose.model('itineraries', itinerariesSchema);
module.exports = itineraries;