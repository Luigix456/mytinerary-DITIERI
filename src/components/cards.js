import React from 'react'
import Card from './citiesCards'
/* import data from '../../card.json' */
import { useState, useEffect } from 'react'
import axios from 'axios'
 function Cards() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [ciudades, setCiudades] = useState([])
 /*  const [city, setCity] = useState(); */
 useEffect(() => {
  const loadPosts = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://localhost:4000/api/allcities"
    )
    setCiudades(response.data.response.cities)
    setPosts(response.data.response.cities)
    setLoading(false);
  }

  loadPosts()
}, [])

 const searching = (search) => {
  setSearchTitle(search.target.value);
  filtro(search.target.value);
}
const filtro = function (resultado) {
  let resultadoFiltro = posts.filter(function (card)
  {
    if (
      card.name
        .toString()
        .toLowerCase()
        .startsWith(resultado.toLowerCase().trim())
    ) {
      return card
    } return(console.log("filtro"))
  })
  setCiudades(resultadoFiltro)
}
  console.log(searchTitle)
  return (
    <>
    <div className='searchfilter'>
      <br></br>
      <div className='search-title'>
        <p>¡Find your favorite place!</p>
      <input
        type="text"
        placeholder="Search..."
        value={searchTitle}
        onChange={searching}
      />
      </div>
      </div>
      <div className='container d-flex justify-content-center h-100'>
      <div className='row cards'>   
      {loading ? (<h4>Loading ...</h4>) : (console.log("..."))}
      {ciudades.length !== 0 ? (
        ciudades.map((item) => (
        <div className='row cards' key={item.id}>
        <Card
                  image = {item.image}
                  continent = {item.continent}
                  name = {item.name}
                  description = {item.description}
               />
        </div>))
        ) : (
        <h3 className='notFound'>Not Found :/</h3>
        )}
      </div>
    </div>
    </>
      )
  }
export default Cards


/* import React from 'react'
import Card from './citiesCards'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Cards() {
  const [filter, setFilter] = useState('');
  const [ciudades, setCiudades] = useState([]);

  useEffect (() => {
    const loadDate = async () =>{
      const respuesta = await axios.get("http://localhost:4000/api/allcities")
      setCiudades(respuesta.data.response.ciudades)
      console.log(ciudades)
    }
    
    loadDate();
  },[])
  
  return (
    <div className='cities'>
      <input className="inp-search" type="text" placeholder="Search..." value={filter} onChange={(event)=>setFilter(event.target.value)}/>
      <div className='container d-flex justify-content-center h-100'>
        <div className='row cards'>
           {{
             ciudades.length!== 0? (
               ciudades.map((city) => (
               <Card
                  image = {city.image}
                  continent = {city}
                  name = {city.name}
                  description = {city.description}
               />
             )))
             : (<h2>------Not Found  -----</h2>)
                }}
        </div>
    </div>
    </div>
    
  )
}

export default Cards */