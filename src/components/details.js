import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { Link as LinkRouter } from "react-router-dom";
import DetailsItinerary from "./detailsCard";
import "../styles/stylesItineraries.css"
const Cards = (props) => {
  const { cities, itineraries } = props;

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    props.perCity(id);
    props.itinerariesPorCiudad(id);
  }, []);
  console.log(props);
  return (
      <>{itineraries.length > 0 ? itineraries.map(itinerario => {
          return <DetailsItinerary itinerary={itinerario}/>
      })
    : <div><br></br><h1>There is no itineraries in this page at the moment, please comeback soon!</h1></div>}
      </>
  )};
const mapStateToProps = (state) => {
  return {
    cities: state.Data.cities,
    filterCities: state.Data.filterCities,
    itineraries: state.itinerariesReducer.itineraries,
  };
};
const mapDispatchToProps = {
  perCity: citiesActions.perCity,
  itinerariesPorCiudad: itinerariesActions.itinerariesPorCiudad,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
