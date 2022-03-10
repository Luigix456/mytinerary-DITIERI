import { combineReducers } from "redux";

import itinerariesReducer from './itinerariesReducer'
import citiesReducer from './citiesReducer'

const mainReducer = combineReducers ( {
    itinerariesReducer,
    Data: citiesReducer
})

export default mainReducer