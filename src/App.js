import React from 'react'
import './App.css'

import About from './pages/About'
import Contactus from './pages/Contactus'
import European from './pages/European'
import Usa from './pages/Usa'
import Aupac from './pages/Aupac'
import { Route } from 'react-router-dom'
import Healtcare from './pages/Healtcare'
import Footer from './components/Footer'
import Database from './pages/Database'
import Legacy from './pages/Legacy'
import Industry from './pages/Industry'

export default function App() {
  return (
    <div>
      <React.Fragment>

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contactus} />
        <Route exact path="/aupac" component={Aupac} />
        <Route exact path="/european" component={European} />
        <Route exact path="/heathcare" component={Healtcare} />
        <Route exact path="/techdata" component={Database} />
        <Route exact path="/legacy" component={Legacy} />
        <Route exact path="/industry" component={Industry} />
        <Route exact path="/usa" component={Usa} />

        <Footer />
      </React.Fragment>
    </div>
  )
}
