import React from 'react';
import ReactDOM from 'react-dom';

import { ProvideWeather } from 'utils/hooks/use-routes';

import App from './App';


ReactDOM.render(
   <React.StrictMode>
      <ProvideWeather>
         <App />
      </ProvideWeather>
   </React.StrictMode>,
  document.getElementById('root')
);
