import { dateParsed } from 'utils/helpers/dateParsed'
import { temperatureParsed } from 'utils/helpers/temperatureParsed'
import { useUnitTemperature } from 'utils/hooks/context/use-unit-temperature'
import { useWeather } from 'utils/hooks/context/use-weather'
import { ICONS } from 'utils/icons'

import './weatherToday.scss'


const WeatherToday = () => {
   const { data } = useWeather()
   const { unit } = useUnitTemperature()


   return (
      <div className="weatherToday">
         <img src={"/images/Cloud-background.png"} className="cloudBackground" alt='Cloud'/>

         <img src={`/images/${ICONS[data.list[0].weather[0].main]}.png`} alt={ICONS[data.list[0].weather[0].main]} className="imgToday"/>

         <p>{temperatureParsed(data.list[0].main.temp, unit)}</p>

         <p>{data.weather_state_name}</p>

         <p>{`Today · ${dateParsed()}`}</p>

         <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            {' '}
            {data.city.name}
         </p>
      </div>
   )
}


export default WeatherToday
