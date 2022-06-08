import CardWeatherForecast from '../cardWeatherForecast'
import WeatherHightlights from '../weatherHightlights'

import './cardWeather.scss'

const CardWeather = ({ data, temp }) => {
    const infoDay = data.consolidated_weather[0]

    return (
        <div className="cardWeather">
            <CardWeatherForecast data={data.consolidated_weather} temp={temp}/>
            <WeatherHightlights data={infoDay}/>
        </div>
    )
}

export default CardWeather
