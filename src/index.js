import React, {} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './reduxdata/Store'
import App from './App';

ReactDOM.render(

   <BrowserRouter>
    <Provider store={Store}> 
<App/>

      </Provider>
    </BrowserRouter>,



  document.getElementById('root')
);
reportWebVitals();
