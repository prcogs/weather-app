import { useState } from "react"

import './searchBar.scss'


const SearchBar = ({ changeCity, loadingSearch, getData, citys, changeTemp, temp }) => {
    const [search, setSearch] = useState(false)

    if( temp === "c") {
        var colorTempC = "#110E3C"
        var backColorTempC = "white"

        var colorTempF = "white"
        var backColorTempF = "#585676"
    }

    else if (temp === "f") {
        var colorTempC = "white"
        var backColorTempC = "#585676"

        var colorTempF = "#110E3C"
        var backColorTempF = "white"
    }

    if(!search) {
        return (
            <>
            <div className="searchBar">

                <button onClick={ () => { setSearch(true)}} className="seachBtn">Seach for places</button>
            </div>
            <div className="btnTemp">
                <button onClick={() => {changeTemp("c")}} style={{ "color" : colorTempC, "backgroundColor" : backColorTempC}}>°C</button>
                <button onClick={() => {changeTemp("f")}} style={{ "color" : colorTempF, "backgroundColor" : backColorTempF}}>°F</button>
            </div>
            </>
        )
    }

    else if (search) {
        return (
            <div className="searchBarLarge">
                <button onClick={() => {setSearch(false)}} className="cross"><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
                <input type="text" onChange={(e) => {changeCity(e.target.value)}} className="inputBtn" placeholder="search location"/><br/>
                <ul className="listCity">
                {loadingSearch ? citys.map((item, i) => 
                        <li key={i}>
                            <button onClick={() => {getData(item.woeid)}} className="btnCity">
                                {item.title} <i className="fa fa-angle-right iconAngle" aria-hidden="true"></i>
                            </button>
                        </li>) 
                        : <p style={{"color" : "grey"}}>Wait a minute</p>}<br/>
                </ul>  
            </div>
        )
    }
    
}

export default SearchBar