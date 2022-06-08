import calcPointsCompass from 'utils/helpers/pointsCompass'

import './hightlightsInfo.scss'


const HightlightsInfo = ({ children, windSpeed, windDirection, humidity, visibility, air_pressure }) => {

   const render = () => {
      if (windSpeed && windDirection) {
         const degres = Math.round(windDirection)

         return (
            <>
               {Math.round(windSpeed) + ' mph'}<br />
               <img
                  src={"/images/north-icon.png"}
                  alt="north icon"
                  className="north-icon"
                  style={{ "transform": `rotate(${degres}deg)` }}
               />
               <strong className="point">{calcPointsCompass(degres)}</strong>
            </>
         )
      }

      else if (humidity) {
         return (
            <>
               {humidity + ' %'}<br />
               <span>0</span>
               <span>50</span>
               <span>100</span>
               <progress max="100" value={humidity}></progress>
               <span>%</span>
            </>
         )
      }

      else if (visibility) return Math.round(visibility * 10) / 10 + ' miles'

      else if (air_pressure) return air_pressure + ' mb'
   }

   return (
      <div className="hightlightsInfo">
         <p>{children}</p>

         <p>{render()}</p>
      </div>

   )
}

export default HightlightsInfo
