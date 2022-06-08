import React from 'react';
import ReactDOM from 'react-dom';
import { ProvideUnitTemperature } from 'utils/hooks/context/use-unit-temperature';

import { ProvideWeather } from 'utils/hooks/context/use-weather';

import App from './App';


ReactDOM.render(
   <React.StrictMode>
      <ProvideUnitTemperature>
         <ProvideWeather>
            <App />
         </ProvideWeather>
      </ProvideUnitTemperature>
   </React.StrictMode>,
  document.getElementById('root')
);
