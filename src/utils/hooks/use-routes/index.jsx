import { createContext, useContext, useEffect, useState } from 'react';

import { getWeatherData } from 'utils/api/request/getWeatherData';

export const WeatherDataContext = createContext({});

export function useProvideWeatherData() {
   const [data, setData] = useState(null)

     // init data in paris
   useEffect(() => {
      const data = async () => {
      const resp  = await getWeatherData()
         setData(resp)
      }

      data()
   }, [])

   return {
      data,
   };
}

export function ProvideWeather({ children }) {
   const handleWeatherData = useProvideWeatherData();
   return <WeatherDataContext.Provider value={handleWeatherData}>{children}</WeatherDataContext.Provider>;
}

export function useWeather() {
   return useContext(WeatherDataContext);
}
