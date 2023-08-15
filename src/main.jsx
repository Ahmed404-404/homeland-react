import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import { HousesDataProvider } from './store/housesData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <HousesDataProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HousesDataProvider>

)
