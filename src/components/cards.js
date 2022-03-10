import React from "react";
import Card from "./citiesCards";
/* import data from '../../card.json' */
import { useState, useEffect } from "react";
import axios from "axios";
import citiesActions from "../redux/actions/citiesActions";
import { connect } from "react-redux";

function Cards(props) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [ciudades, setCiudades] = useState([]);

  // const searching = (search) => {
  // setSearchTitle(search.target.value);
  // props.filtro(search.target.value);
  // };

  useEffect(() => {
    props.fetchCities();
  }, []);
  console.log(props);

  const searching = (evento) => {
    setSearchTitle(evento.target.value);
    props.filterCity(props.cities, evento.target.value);
  }

  return (
    <>
      <div className="searchfilter">
        <br></br>
        <div className="search-title">
          <p>¡Find your favorite place!</p>
          <input
            type="text"
            placeholder="Search..."
            value={searchTitle}
            onChange={searching}
          />
        </div>
        {/* <div>
          {props.filterCities.map(city => <h2>{city.name}</h2>)}
        </div> */}
      </div>
       <div className="container d-flex justify-content-center h-100">
        <div className="row cards">
          {loading ? <h4>Loading ...</h4> : console.log("...")}
          {props.filterCities.length !== 0 ? (
            props.filterCities.map((item) => (
              <div className="row cards" key={item.id}>
                <Card
                  image={item.image}
                  continent={item.continent}
                  name={item.name}
                  description={item.description}
                  id={item._id}
                />
              </div>
            ))
          ) : (
            <h3 className="notFound">Not Found :/</h3>
          )}
        </div>
      </div> 
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.Data.cities,
    filterCities: state.Data.filterCities,
  };
};
const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
  filterCity: citiesActions.filterCity,
};
export default connect(mapStateToProps,mapDispatchToProps)(Cards)