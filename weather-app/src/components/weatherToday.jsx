import './weatherToday.scss'

const WeatherToday = ({ data, city }) => {
    const myDate     = new Date(data.applicable_date)
    const shortMonth = myDate.toLocaleString('en-us', { month: 'short' });
    const shortDay   = myDate.toLocaleString('en-us', { weekday: 'short' });
    // const dayNow     = new Date
    const pathWheather = "../images/" + data.weather_state_name.replace(' ', '') + '.png'

    var day = shortDay  +', '+ myDate.getDate() + ' ' + shortMonth

    return (
        <div className="weatherToday">
            <img src={pathWheather} alt={data.weather_state_name} className="imgToday"/>
            <p>{Math.round(data.the_temp)} °C</p>
            <p>{data.weather_state_name}</p>
            <p>Today {' ' + day}</p>
            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {city}</p>

        </div>
    )
}

export default WeatherToday