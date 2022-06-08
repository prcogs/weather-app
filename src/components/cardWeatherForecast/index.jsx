import WeatherForecast from '../weatherForcast'

import './cardWeatherForecast.scss'


const CardWeatherForecast = ({ data, temp }) => {
    const forecast = data.filter((item,i) => i > 0)

    return (
        <div className="cardWeatherForecast">
            {forecast.map((item, i) => {
                return <WeatherForecast data={item} temp={temp} key={i}/>
            } )}
        </div>
    )
}

export default CardWeatherForecast
