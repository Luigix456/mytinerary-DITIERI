import React from 'react'
import Card from './citiesCards'
import ciudades from './datos'
import { useState } from 'react'
function Cards() {
  const [filter, setFilter] = useState('');

  let dataSearch = ciudades.filter(city => city.name.substring(0,filter.length).toLowerCase() === filter.toLowerCase().trim())
  return (
    <div className='container d-flex justify-content-center h-100'>
      <div className='col'>
        </div>
        <div className='row cards'>
           {
             dataSearch.map(card=> (
               <>
                    <Card city={card} key={card.name} />
                </>
           ))
          }
          <input type="text" placeholder="Search..." value={filter} onChange={(event)=>setFilter(event.target.value)}/>
        </div>
    </div>
  )
}

export default Cards