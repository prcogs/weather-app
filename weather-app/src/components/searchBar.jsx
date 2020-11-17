import { useState } from "react"

import './searchBar.scss'


const SearchBar = ({ changeCity, loadingSearch, getData, citys }) => {
    const [search, setSearch] = useState(false)

    if(!search) {
        return (
            <div className="searchBar">
                <button onClick={ () => { setSearch(true)}} className="seachBtn">Seach for places</button>
            </div>
        )
    }

    else if (search) {
        return (
            <div className="searchBarLarge">
                <button onClick={() => {setSearch(false)}} className="cross"><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
                <input type="text" onChange={(e) => {changeCity(e.target.value)}} className="inputBtn" placeholder="search location"/><br/>
                <ul className="listCity">
                {loadingSearch ? citys.map((item, i) => 
                        <li key={i}><button onClick={() => {getData(item.woeid)}} className="btnCity">{item.title}</button></li>) : "Wait a minute"}<br/>
                </ul>  
            </div>
        )
    }
    
}

export default SearchBar