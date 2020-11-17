import HightlightsInfo from './hightlightsInfo'

import './weatherHightlights.scss'

const WeatherHightlights = ({ data }) => {

    return (
        <div className="weatherHightlights">
            <p>Today's higthlights</p>
            <div className="container">
                <HightlightsInfo windSpeed={data.wind_speed} windDirection={data.wind_direction}>
                    Wind Status
                </HightlightsInfo>

                <HightlightsInfo humidity={data.humidity}>
                    Humidity
                </HightlightsInfo>

                <HightlightsInfo visibility={data.visibility}>
                    Visibilty
                </HightlightsInfo>

                <HightlightsInfo air_pressure={data.air_pressure}>
                    Air pressure
                </HightlightsInfo>
            </div>
        </div>
    )
}

export default WeatherHightlights