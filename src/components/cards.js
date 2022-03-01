import React, { useEffect } from 'react'
import Card from './citiesCards'
import ciudades from './datos'
import { useState } from 'react'
import axios from 'axios'
function Cards() {
  const [filter, setFilter] = useState('');


  useEffect (()=> {
    axios.get(`http://localhost:4000/api/allcities`)
    .then(response=>console.log(response))
  },[])
  
  
  let dataSearch = ciudades.filter(city => city.name.substring(0,filter.length).toLowerCase() === filter.toLowerCase().trim())
  return (
    <div className='cities'>
      <input className="inp-search" type="text" placeholder="Search..." value={filter} onChange={(event)=>setFilter(event.target.value)}/>
      <div className='container d-flex justify-content-center h-100'>
        <div className='row cards'>
           {
             dataSearch.map(card=> (
               <>
                    <Card city={card} key={card.name} />
                </>
           ))
          }
        </div>
    </div>
    </div>
    
  )
}

export default Cards