import axios from "axios";

const itinerariesActions = {

    itinerariesPorCiudad: (id) => {
        console.log(id)
        return async (dispatch, getState) =>{
            try {
                const res = await axios.get ('http://localhost:4000/api/itineraries/'+id)
                console.log(res.data)
                dispatch ({type: 'fetchItinerario', payload: res.data.response})
            }catch (error) {console.log(error)}
        }
    },
}
export default itinerariesActions


