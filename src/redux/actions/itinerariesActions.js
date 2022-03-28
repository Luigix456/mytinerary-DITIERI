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

    likeItinerary: (id, token) =>{
        return async () => {
                try{
                    const response = await axios.put(`http://localhost:4000/api/itineraries/like/${id}`, {},{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    return response
                } catch(error) {
                    console.error(error)
                }
        }
    },
    };
export default itinerariesActions
