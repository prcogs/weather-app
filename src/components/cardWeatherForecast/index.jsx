import { useWeather } from 'utils/hooks/context/use-weather'
import WeatherForecast from 'components/weatherForcast'

import './cardWeatherForecast.scss'


const CardWeatherForecast = () => {
   const { data } = useWeather()

   const oneDataPerDay = data.list.filter(({ dt_txt }) => Number(dt_txt.slice(10, 13)) === 12)


   return (
      <div className="cardWeatherForecast">
         {oneDataPerDay.slice(0, 4).map((item, i) => (
            <WeatherForecast data={item} idx={i} key={i} />
         ))}
      </div>
   )
}


export default CardWeatherForecast
