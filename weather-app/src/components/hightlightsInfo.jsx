import './hightlightsInfo.scss'


const HightlightsInfo = ({ children, windSpeed, windDirection, humidity, visibility, air_pressure }) => {

    const data = () => {
        if (windSpeed && windDirection) { return Math.round(windDirection) + ' ' + Math.round(windSpeed) + ' mph' }
        else if (humidity) { return humidity + ' %'}
        else if (visibility) { return Math.round(visibility * 10) / 10 + ' miles'}
        else if (air_pressure) { return air_pressure + ' mb'}
    }
    
    return (
        <div className="hightlightsInfo">
            <p>{children}</p>
            <p>{data((windSpeed && windDirection) || humidity || visibility || air_pressure)}</p>
        </div>

    )
}

export default HightlightsInfo