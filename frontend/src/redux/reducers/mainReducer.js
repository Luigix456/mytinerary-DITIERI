import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from './userReducer'
import activitiesReducer from './activitiesReducer'


const mainReducer = combineReducers ( {
    itinerariesReducer,
    Data: citiesReducer,
    userReducer,
    activitiesReducer,
})

export default mainReducer