const Router = require('express').Router()
const validator = require('../config/validator')

const citiesController = require('../controllers/citiesControllers')
const {obtainCities, consultarCiudadePorID} = citiesController

const itinerariesControllers = require('../controllers/itinerariesControllers')
const {obtainItineraries, loadItinerary, deleteItinerary, modifyItinerary,getCityItineraries} = itinerariesControllers

const usersControllers = require('../controllers/userControllers')
const {signUpUsers, signInUser, signOutUser}= usersControllers


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
.get(getCityItineraries)

Router.route('/auth/signUp')
.post(validator, signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)


module.exports = Router


