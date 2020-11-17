import CardWeatherForecast from './cardWeatherForecast'
import WeatherHightlights from './weatherHightlights'

import './cardWeather.scss'

const CardWeather = ({ data }) => {
    const infoDay = data.consolidated_weather[0]

    return (
        <div className="cardWeather">
            <CardWeatherForecast data={data.consolidated_weather}/>
            <WeatherHightlights data={infoDay}/>
        </div>
    )
}

export default CardWeather