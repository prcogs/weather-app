import CardWeatherForecast from 'components/cardWeatherForecast'
import WeatherHightlights from 'components/weatherHightlights'

import './cardWeather.scss'


const CardWeather = () => {
   return (
      <div className="cardWeather">
         <CardWeatherForecast />

         <WeatherHightlights />
      </div>
   )
}

export default CardWeather
