import { createContext, useContext, useEffect, useState } from 'react';

import { getWeatherData } from 'utils/api/request/getWeatherData';
import { useLocalStorage } from 'utils/hooks/utils/use-local-storage';


export const WeatherDataContext = createContext({});

export function useProvideWeatherData() {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [errors, setErrors] = useState(null)
   const [errorAPI, setErrorAPI] = useState(false)
   const [history, setHistory] = useLocalStorage('history', [])

   const handleCity = async city => {
      if (errorAPI) return;
      if (city.trim() === '') return setErrors('City not found')

      setLoading(true)
      setErrors(null)

      const { data, error }  = await getWeatherData(city)

      if(error) setErrors('City not found')

      if(data) {
         if (!history.includes(city)) setHistory(prevState => [...prevState, city])
         setData(data)
      }

      setLoading(false)
   } 

   useEffect(() => {
      const firstFetch = async () => {
         const { data, error }  = await getWeatherData()
      
         if(error) setErrorAPI(true)

         if (data) {
            setData(data)
            setLoading(false)
         }
      }

      firstFetch()
   }, [])

   return {
      data,
      loading,
      handleCity,
      history,
      errors,
      errorAPI,
   };
}

export function ProvideWeather({ children }) {
   const handleWeatherData = useProvideWeatherData();
   return <WeatherDataContext.Provider value={handleWeatherData}>{children}</WeatherDataContext.Provider>;
}

export function useWeather() {
   return useContext(WeatherDataContext);
}
