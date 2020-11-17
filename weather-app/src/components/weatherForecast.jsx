import './weatherForcast.scss'


const WeatherForecast = ({ data }) => {
    const myDate     = new Date(data.applicable_date)
    const shortMonth = myDate.toLocaleString('en-us', { month: 'short' });
    const shortDay   = myDate.toLocaleString('en-us', { weekday: 'short' });
    const dayNow     = new Date
    const pathWheather = "../images/" + data.weather_state_name.replace(' ', '') + '.png'
    console.log(pathWheather)

    if(myDate.getDate() === dayNow.getDate() + 1) {
        var day = "Tomorrow"
    } else {
        var day = shortDay  +', '+ myDate.getDate() + ' ' + shortMonth
    }

    return (
        <div className="weatherForcast">
            <p>{day}</p>
            <div className="info">
            <img src={pathWheather} alt={data.weather_state_name} className="imgInfo"/>
            </div>
            <p>{Math.round(data.min_temp)+ ' °C'} - {Math.round(data.max_temp)+ ' °C'}</p>
        </div>
    )
}

export default WeatherForecast