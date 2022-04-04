/* import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from '../redux/actions/itinerariesActions'
import ItineraryItem from './itinerariesItemDetails';



const Details = (props) =>{
    const { 
        city,
    } = props;
 
    const {id} = useParams()
    
  
    useEffect(() => {
        
        
        props.perCity(id)
        props.itinerariesPorCiudad(id)
    }, []);

       
    return(
        
        <div className='mb-5'>
         
            <div className="d-flex flex-column align-items-center justify-content-center"> 
            
                <h2 className='mt-5 title h2 text-center textCarr'>{city.name} Itineraries</h2>
            

                {props.itineraries?.length !== 0 ?  
        ( 
           props.itineraries.map((itinerary) => (
                <div className="d-flex flex-column" key={itinerary.cityId}>
                    <ItineraryItem itinerary={itinerary} id={itinerary.cityId} />    
                 </div>
                  ))):
                  (<h3 className='mt-5 title h2 text-center textCarr'>WE COULD NOT FIND ANY ITINERARY FOR THIS CITY</h3>)}
          
          
        
          </div>
        ))
 

        
            </div>
        
        
    
    )
       
    }
    const mapStateToProps = (state) => {
        return {
                  city: state.Data.city,
                  itineraries: state.itinerariesReducer.itineraries, 
                  
                   
        };
      };
      
      const mapDispatchToProps = {
                perCity: citiesActions.perCity,
                itinerariesPorCiudad: itinerariesActions.itinerariesPorCiudad
      };
      export default connect(mapStateToProps, mapDispatchToProps)(Details); */