import axios from 'axios';
import { ACTIVITIES_GET } from './types';

const activitiesActions = {

    activityPerItinerary: (id) => {
    
    return async(dispatch, getState)=>{
    try {
        const res = await axios.get('http://localhost:4000/api/itineraryActivities/'+id)
    return {success:true, response: res.data.response}
    
    }catch (error) {
        console.log(error)
    }
}
    },


getOneActivity: (id) => {
    return async (dispatch, getState) => {
        
        const res = await axios.get('http://localhost:4000/api/activities/'+id)
        
       return res
    }
},



}

export default activitiesActions;