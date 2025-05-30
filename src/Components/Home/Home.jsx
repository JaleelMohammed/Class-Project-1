import {  useState } from 'react'
import './Home.css'
import KeyCard from '../key-Card/KeyCard.jsx'
import Cards from '../Cards/Cards.jsx'
import Footer from '../Footer/Footer.jsx'
export default function Home() {

  const [close, setClose] = useState(false);
  console.log(close);

  return (
    <>
      <div className='container1'>
        <div className="banner">

        <h1>RJ Technology</h1>
        <strong>Best Online & classroom Training Institue</strong>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error cumque quis voluptate at unde ducimus dolorum delectus, temporibus nisi animi quod suscipit. Sint dignissimos sequi soluta magnam assumenda quas numquam nisi vero dolore laborum debitis nam, repellendus cum, rerum error asperiores, vitae repudiandae unde dolor suscipit optio delectus. Recusandae, minima!</p>
        <br />
        <button className="bt1" onClick={() => setClose(true)}>Apply Online</button>
        </div>
      </div>


      {close && <form className='Apply'>
        <strong>Quick Enquiry</strong><i className="bi bi-x-square-fill" onClick={() => setClose(false)}></i>
        <input type="text" placeholder="Name" required /> <br />
        <input type="tel" placeholder="10 Digit Mobile No" required /> <br />
        <input type="email" placeholder="Email" /> <br />
        <textarea name="" id="" rows="2" cols="20"></textarea><br />
        <button>I'm Intrested Tell me More</button>
      </form> }


      <KeyCard />
      <Cards />
      <Footer />
    </>
  )
}
