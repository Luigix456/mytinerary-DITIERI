import axios from 'axios';
import { ITINERARIES_GET } from './types';

const itinerariesActions = {

itinerariesPerCity: (id) => {
    
    return async(dispatch, getState)=>{
    const res = await axios.get('http://localhost:4000/api/cityItineraries?cityId='+id)
    
    dispatch({type: ITINERARIES_GET, payload:res.data.response})
    
    }
},
 
}

export default itinerariesActions


