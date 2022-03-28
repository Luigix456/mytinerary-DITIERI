import { ACTIVITIES_GET } from '../actions/types';

const initialState = {
    activities:[],
    aux:[],
  
    
}

const activitiesReducers = (state = initialState, action)=>{

    switch(action.type){
        case ACTIVITIES_GET:
           
            return {    
                            
                    ...state,
                    activities: action.payload,
                    
                                       
                }
           
        default: 
        
            return state  
           
        }}
        
        export default activitiesReducers;