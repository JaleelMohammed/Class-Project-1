import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar.jsx'
import KeyCard from '../key-Card/KeyCard.jsx'
export default function Home() {
  return (
<>
    <NavBar/>
    <div className=' container1 container-fluid'>
        <h1>RJ Technology</h1>
        <strong>Best Online & classroom Training Institue</strong>
        
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo accusamus, sunt, assumenda repudiandae tempora placeat id error facere itaque dicta architecto quibusdam earum laborum totam aspernatur facilis porro. Expedita placeat atque dicta, possimus fuga ea deleniti sunt dignissimos! Ut, repellat.</p>
            <br/>
            <button class="bt">Apply Online</button>

    </div>
    <KeyCard/>
    </>
  )
}
