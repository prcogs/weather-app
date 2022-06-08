import { useWeather } from 'utils/hooks/context/use-weather'
import HightlightsInfo from '../hightlightsInfo'

import './weatherHightlights.scss'

const WeatherHightlights = () => {
   const { data } = useWeather()
   const dataDay = data.list[0]

   return (
      <div className="weatherHightlights">
         <p>Today's higthlights</p>

         <div className="container">
            <HightlightsInfo windSpeed={dataDay.wind.speed} windDirection={dataDay.wind.deg}>
               Wind Status
            </HightlightsInfo>

            <HightlightsInfo humidity={dataDay.main.humidity}>
               Humidity
            </HightlightsInfo>

            <HightlightsInfo visibility={dataDay.visibility}>
               Visibilty
            </HightlightsInfo>

            <HightlightsInfo air_pressure={dataDay.main.pressure}>
               Air pressure
            </HightlightsInfo>
         </div>
      </div>
   )
}

export default WeatherHightlights
