import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Table from './Components/Table'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/details">
          <Table />
        </Route>
        <Route path="/details/:id">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  )
}

export default App
