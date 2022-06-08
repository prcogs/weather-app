const { UNIT } = require('utils/hooks/context/use-unit-temperature')


export const temperatureParsed = (temp, unit) => {
   return unit === UNIT.celsius ? `${Math.round(temp)} °C` : `${Math.round(temp * 9/5) + 32} °F`
}
