
const getFetchData = async (woeid) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    const resp = await res.json()

    return resp
}


const getWoeid = async (city) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`)
    const resp = await res.json()

    return resp
}

export { getFetchData, getWoeid }
