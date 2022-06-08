import { reqfetch } from 'utils/api'

const WEATHER_API = process.env.REACT_APP_WEATHER_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

console.log(WEATHER_API)
export const getWeatherData = async (city = 'Paris') => {
   const { data, error } = await reqfetch(`${WEATHER_API}/forecast?q=${city}&appid=${API_KEY}&units=metric`)

   return { data, error }
}
