import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Page404 from './Components/Page404'
import User from './Components/User'
import UserName from './Components/UserName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users/' element={<User />}>
          </Route>
          <Route path='/users/:name' element={<UserName />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
