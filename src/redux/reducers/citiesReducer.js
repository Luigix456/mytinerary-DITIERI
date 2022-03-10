const initialState = {
    city: [],
    aux: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                city: action.payload,
                aux: action.payload
            }
            case 'deleteCity':
                return {
                    ...state,
                    itineraries: action.payload
                }
            case 'loadCity':
                let city = [...state.itineraries]
                city.push(action.payload)
                return {
                    ...state,
                    city,
                    aux: [...city]
                }
                case 'filtro':
                    const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
        
                    return {
                        ...state,
                        filterCities: filtrado
                    }
                default:
                    return state
            
    }
}
export default citiesReducer