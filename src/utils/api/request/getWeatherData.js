import { reqfetch } from 'utils/api'

const WEATHER_API = process.env.REACT_APP_WEATHER_API_URL
const API_KEY = process.env.REACT_APP_API_KEY


export const getWeatherData = async (city = 'Paris') => {
   const { data, error } = await reqfetch(`${WEATHER_API}/forecast?q=${city}&exclude=minute&appid=${API_KEY}&units=metric`)

   if (data?.message === 'city not found' || data?.message === 'Nothing to geocode') return { error: 'error'}

   return { data, error }
}
