import { useWeather } from 'utils/hooks/context/use-weather';

import CardMenu from 'components/cardMenu'
import CardWeather from 'components/cardWeather'

import './loader.scss'
import './App.scss';


function App() {
   const { loading, errorAPI } = useWeather()


   return (
      <div className="App">
         <CardMenu />

         {!loading ? <CardWeather /> : <div className="cardWeather">loading</div>}
         {errorAPI && loading && <div className="cardWeather">The data could not be recovered, please try again in few minutes</div>}
      </div>
   );
}

export default App;
