import logo from './logo.svg';
import './App.scss';

import CardMenu from './components/cardMenu'
import CardWeather from './components/cardWeather'

function App() {
  return (
    <div className="App">
      <CardMenu />
      <CardWeather />
      
    </div>
  );
}

export default App;
