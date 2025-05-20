import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Home from './Components/Home/Home.jsx'
import KeyCard from './Components/key-Card/KeyCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar/> */}
      <Home/>
      {/* <KeyCard/> */}
    </>
  )
}

export default App
