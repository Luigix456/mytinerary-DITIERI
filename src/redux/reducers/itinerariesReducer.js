
const initialState = {
    itineraries: [],
    aux: []
}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetchItinerario':
            return {
                ...state,
                itineraries: action.payload,
                aux: action.payload
            }
            case 'delete':
                return {
                    ...state,
                    itineraries: action.payload
                }
            case 'loadItinerary':
                let itineraries = [...state.itineraries]
                itineraries.push(action.payload)
                return {
                    ...state,
                    itineraries,
                    aux: [...itineraries]
                }
            case 'filterItinerary':
                const filter = action.payload.itineraries.filter((itinerary => itinerary.name.toLowerCase()))
                return { 
                    ...state,
                    itineraries: filter
                }
            default:
                return state
            
    }
}
export default itinerariesReducer