
export const dateParsed = (d = 'now') => {
   const date =  d === 'now' ? new Date() : new Date(d)
   const month = date.toLocaleString('en-us', { month: 'short' })
   const day = date.toLocaleString('en-us', { weekday: 'short' })

   return `${day}, ${date.getDate()} ${month}`
}
