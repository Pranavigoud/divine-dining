import React from 'react'
import NavBar from './components/NavBar'
import Gallery from './pages/Gallery'
import Reservation from './pages/Reservation'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Gallery/>
      {/* <Reservation/> */}
    </div>
  )
}

export default App