const initialState = {
          apiData: [],
          filterApiData: [],
          auxiliar: [],
};

const dataReducer = (state = initialState, action) => {
          //console.log(action)

          switch (action.type) {
                    case "fetch":
                              return {
                                        ...state,
                                        apiData: action.payload,
                                        filterApiData: action.payload,
                                        auxiliar: action.payload,
                              };

                    case "filtro":
                              const filtrado = action.payload.apiData.filter(
                                        (data) =>
                                                  data.name
                                                            .toLowerCase()
                                                            .startsWith(
                                                                      action.payload.value
                                                                                .toLowerCase()
                                                                                .trim()
                                                            )
                              );

                              return {
                                        ...state,
                                        filterApiData: filtrado,
                              };
                    default:
                              return state;
          }
};
export default dataReducer;
