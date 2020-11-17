import WeatherForecast from './weatherForecast'

import './cardWeatherForecast.scss'


const CardWeatherForecast = ({ data }) => {
    const forecast = data.filter((item,i) => i > 0)

    return (
        <div className="cardWeatherForecast">
            {forecast.map((item, i) => {
                return <WeatherForecast data={item} key={i}/>
            } )}
        </div>
    )
}

export default CardWeatherForecast