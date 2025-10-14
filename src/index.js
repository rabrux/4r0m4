import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from 'App'
import Redirect from 'components/Redirect'
import Main from 'sections/main'

import AceitesEsenciales from 'sections/aceites-esenciales'
import OilDetail from 'sections/aceites-esenciales/Detail'

import Sinergia from 'sections/sinergia'

import reportWebVitals from 'reportWebVitals'
import 'skin/index.sass'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ App }>
          <Route path="main" Component={ Main } />

          <Route path="aceites-esenciales" Component={ AceitesEsenciales }>
            <Route path=":name" Component={ OilDetail } />
          </Route>

          <Route path="sinergia" Component={ Sinergia }>
          </Route>

          <Route
            index
            element={ <Redirect to="/main" /> }
          />

          <Route
            path="*"
            element={ <Redirect to="/main" /> }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
