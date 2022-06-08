import logo from './logo.svg';
import './App.scss';

import datas from './lib/data.json'
import { getFetchData, getWoeid } from './lib/fetchData'

import CardMenu from './components/cardMenu'
import CardWeather from './components/cardWeather'
import { useCallback, useEffect, useState } from 'react';

import './loader.scss'

function App() {
  const [citys, setCitys] = useState([]) // list of city in searchBar
  const [searchCity, setSearchCity] = useState("paris") // city select for woeid
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [loadingData, setLoadingData] = useState(false)
  const [data, setData] = useState({ }) // data weather of city
  const [temp, setTemp] = useState("c")


  // console.log(data)

  // init data in paris
  useEffect(() => {
    getFetchData("615702").then( (allData) => {
      setData(allData)
      setLoadingData(true)

    }, (error) => {
      console.error(error, "error")
    })
  },[])

  // get city/woeid via input searchBar (affiche city in searchBar)
  useEffect(() => {
    setLoadingSearch(false)
      getWoeid(searchCity).then( (cityData) => {
        setCitys(cityData)
        setLoadingSearch(true)

      }, (error) => {
        console.error(error)
      })
  },[searchCity])


  const changeCity = useCallback((newCity) => {
    setSearchCity(newCity)
  },[searchCity, setSearchCity])

  const getData = (woeid) => {
    setLoadingData(false)
    getFetchData(woeid).then( (allData) => {
      setData(allData)
      setLoadingData(true)

    }, (error) => {
      console.error(error, "error")
    })
  }
  
  const changeTemp = useCallback((temp) => {
    setTemp(temp)
  }, [temp, setTemp])

  return (
    <div className="App">
      <CardMenu changeCity={changeCity} 
                data={data} 
                loadingData={loadingData} 
                loadingSearch={loadingSearch} 
                getData={getData} 
                citys={citys}
                changeTemp={changeTemp}
                temp={temp}/>

      {loadingData ? <CardWeather data={data} temp={temp}/> : <div className="cardWeather">loading</div>}
    </div>
  );
}

export default App;
