import { convertLength } from "@mui/material/styles/cssUtils";
import axios from "axios";

const citiesActions = {
    
    fetchCities: () => {
        return async (dispatch, getState) =>{
            const res = await axios.get('http://localhost:4000/api/allcities/')
            console.log(res)            
            dispatch({type: "fetch", payload: res.data.response.ciudades})
            console.log(res.data)
        }
    },
    
    perCity: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get ('http://localhost:4000/api/allcities/'+id)
            console.log(res)
            dispatch ({type: 'fetch', payload: res.data})
        }
    },
    filterCity: (cities, value) => {
        return (dispatch, getState) => {
            dispatch({type: "filtro", send: {cities, value}})
        };
    },
    deleteCities: (id)=>{
        return async(dispatch, getState)=>{
            try {
                const res = await axios.delete('http://localhost:4000/api/alljpcities/'+id)
                
                dispatch({type:'delete', payload:res.data.response.ciudades})
            }catch(err){
                console.log(err)
            }
        }
    },
    chargeCities: (name, ciudad)=>{
        return async(dispatch, getState)=>{
            const res = await axios.post('http://localhost:4000/api/alljpcities',{name,ciudad})
            dispatch({type:'chargeCities', payload:res.data.response.ciudades})
        }
    }
}
export default citiesActions