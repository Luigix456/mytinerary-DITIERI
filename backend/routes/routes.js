const Router = require('express').Router()

const citiesController = require('../controllers/citiesControllers')
const {obtainCities, consultarCiudadePorID} = citiesController

const itinerariesControllers = require('../controllers/itinerariesControllers')
const {obtainItineraries, loadItinerary, deleteItinerary, modifyItinerary} = itinerariesControllers


Router.route('/allcities')
.get(obtainCities)

Router.route('/allcities/:id')
.get(consultarCiudadePorID)
Router.route ('/itineraries')
.get(obtainItineraries)
.post(loadItinerary)


Router.route ('/itineraries/:id')
.delete(deleteItinerary)
.put(modifyItinerary)

module.exports = Router