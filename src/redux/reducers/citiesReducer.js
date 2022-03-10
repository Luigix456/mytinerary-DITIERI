const initialState = {
    city: {},
    cities: [],
    aux: [],
    filterCities: [],
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                cities: action.payload,
                aux: action.payload,
                filterCities: action.payload
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
                    const { citiesArray, value } = action.payload
                    const filtrado = citiesArray.filter((city => city.name.toLowerCase().startsWith(value.toLowerCase().trim())))
        
                    return {
                        ...state,
                        filterCities: filtrado
                    }
                default:
                    return state
            
    }
}
export default citiesReducer