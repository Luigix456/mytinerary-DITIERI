import { combineReducers } from "redux";

import itinerariesReducers from './itinerariesReducer'
import citiesReducer from './citiesReducer'

const mainReducer = combineReducers ( {
    itinerariesReducers,
    citiesReducer
})

export default mainReducer