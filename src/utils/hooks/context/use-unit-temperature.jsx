import { createContext, useContext, useState } from 'react';


export const UNIT = {
   celsius: 1,
   fahrenheit: 2,
}

export const UnitTemperatureContext = createContext({});

export function useProvideUnitTemperature() {
   const [unit, setUnit] = useState(UNIT.fahrenheit)

   const handleUnit = unit => setUnit(unit)

   return {
      unit,
      handleUnit
   };
}

export function ProvideUnitTemperature({ children }) {
   const handleUnitTemperature = useProvideUnitTemperature();
   return <UnitTemperatureContext.Provider value={handleUnitTemperature}>{children}</UnitTemperatureContext.Provider>;
}

export function useUnitTemperature() {
   return useContext(UnitTemperatureContext);
}
