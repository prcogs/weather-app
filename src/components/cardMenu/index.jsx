import SearchBar from '../searchBar'
import WeatherToday from '../weatherToday'

import './cardMenu.scss'

const CardMenu = ( { changeCity, data, loadingData, loadingSearch, getData, citys, changeTemp, temp }) => {

    return (
        <div className="cardMenu">
            <SearchBar changeCity={changeCity} loadingSearch={loadingSearch} getData={getData} citys={citys} changeTemp={changeTemp} temp={temp}/>
            
            {loadingData ? <WeatherToday data={data.consolidated_weather[0]} city={data.title} temp={temp} /> : <div className="loader"></div>}
        </div>
    )
}

export default CardMenu
