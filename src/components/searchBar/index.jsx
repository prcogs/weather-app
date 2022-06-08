import { useState, useRef } from "react"
import { UNIT, useUnitTemperature } from 'utils/hooks/context/use-unit-temperature'
import { useWeather } from 'utils/hooks/context/use-weather'

import './searchBar.scss'


const active = {
   color: "#110E3C",
   background: "white",
}

const notActive = {
   color: "white",
   background: "#585676",
}


const SearchBar = () => {
   const [search, setSearch] = useState(false)
   const { unit, handleUnit } = useUnitTemperature()
   const { handleCity, errors, history } = useWeather()
   

   const refCity = useRef()

   const celsius = unit === UNIT.celsius ? active : notActive
   const fahrenheit = unit === UNIT.fahrenheit ? active : notActive


   if (!search) {
      return (
         <>
            <div className="searchBar">
               <button onClick={() => { setSearch(true) }} className="seachBtn">Seach for places</button>
            </div>

            <div className="btnTemp">
               <button
                  onClick={() => { handleUnit(UNIT.celsius) }}
                  style={{ "color": celsius.color, "backgroundColor": celsius.background }}
               >
                  °C
               </button>

               <button
                  onClick={() => { handleUnit(UNIT.fahrenheit) }}
                  style={{ "color": fahrenheit.color, "backgroundColor": fahrenheit.background }}
               >
                  °F
               </button>
            </div>
         </>
      )
   }


   return (
      <div className="searchBarLarge">
         <button
            onClick={() => { setSearch(false) }}
            className="cross"
         >
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
         </button>

         <div className='searchInput'>
            <input
               type="text"
               ref={refCity}
               className="searchInput__input"
               placeholder="search location"
            />
            <button className='searchInput__btn' onClick={() => handleCity(refCity.current.value)}>Search</button>
         </div>

         <p className='searchInput__error'>{errors}</p>


         <br />
      
         <ul className="listCity">
            {history.map((name, i) =>
               <li key={i}>
                  <button onClick={() => handleCity(name)} className="btnCity">
                     {name} <i className="fa fa-angle-right iconAngle" aria-hidden="true"></i>
                  </button>
               </li>)}
               
               <br />
         </ul>
      </div>
   )
}

export default SearchBar
