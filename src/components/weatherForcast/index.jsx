import { dateParsed } from 'utils/helpers/dateParsed';
import { temperatureParsed } from 'utils/helpers/temperatureParsed';
import { useUnitTemperature } from 'utils/hooks/context/use-unit-temperature';
import { ICONS } from 'utils/icons';

import './weatherForcast.scss'


const WeatherForecast = ({ data, idx }) => {
   const { unit } = useUnitTemperature()


   return (
      <div className="weatherForcast">
         <p>{idx === 0 ? 'Tomorrow' : dateParsed(data.dt_txt)}</p>

         <div className="info">
            <img src={`/images/${ICONS[data.weather[0].main]}.png`} alt={ICONS[data.weather[0].main]} className="imgInfo" />
         </div>

         <p>
            {temperatureParsed(data.main.temp_min, unit)}
            {' '}
            ·
            {' '}
            {temperatureParsed(data.main.temp_max, unit)}
         </p>
      </div>
   )
}


export default WeatherForecast
