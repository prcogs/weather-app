import './weatherForcast.scss'


const WeatherForecast = ({ data, temp }) => {
    const myDate     = new Date(data.applicable_date)
    const shortMonth = myDate.toLocaleString('en-us', { month: 'short' });
    const shortDay   = myDate.toLocaleString('en-us', { weekday: 'short' });
    const dayNow     = new Date
    const pathWheather = "../images/" + data.weather_state_name.replace(' ', '') + '.png'

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
            <p>{temp === "f" ? (Math.round(data.the_temp) * 9/5) + 32 + ' °F' : Math.round(data.the_temp) + ' °C'} · {temp === "f" ? (Math.round(data.the_temp) * 9/5) + 32 + ' °F' : Math.round(data.the_temp) + ' °C'}</p>
        </div>
    )
}



export default WeatherForecast