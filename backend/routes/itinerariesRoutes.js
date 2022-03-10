const Router = require('express').Router();

const itinerariesControllers = require(`../controllers/itinerariesControllers.js`);

const { obtainItineraries, getOneItinerary,  loadItinerary, deleteItinerary, modifyItinerary,getCityItineraries} = itinerariesControllers;

Router.route(`/itineraries`).get(obtainItineraries).post(loadItinerary)

Router.route(`/itineraries/:id`).delete(deleteItinerary).put(modifyItinerary).get(getCityItineraries)