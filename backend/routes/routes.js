const Router = require('express').Router()

const citiesController = require('../controllers/citiesControllers')
const {obtainCities} = citiesController

Router.route('/allcities')
.get(obtainCities)

module.exports = Router