import './Navbar.css'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import FrontEnd from '../Front-End/FrontEnd.jsx'
function NavBar() {

  const[enquiry,setEnquiry]=useState(false)
  return (
    <Router >
      <div className=' position-relative '>
        <marquee behavior="" direction="ltr" className="bg-warning" ><h5>Our Best offer Ever!! Summer Special- Get 3 Courses at 22499/-only. <a href="" className=' text-primary '>Read More</a></h5></marquee>

        <div className="row text-white py-3" style={{ backgroundColor: 'rgb(5, 10, 70)' }}>

          <div className=' d-flex col-md-6 '>
            <h5 className='text-center px-3'>Email:<span > rjtechnology@gmail.com</span></h5>
            <h5 className=''>Contact:<span >+91 8796354678</span></h5>
          </div>
          <div className=' icons col-md-6'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>

        </div>


      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="container-fluid">
          <a className="navbar-brand" href=""><i className='bi bi-mortarboard-fill text-success fs-3'><span className='px-2 fs-3 fw-bold'>RJ Technology</span></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse apps" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  fs-5 ">
              <li className="nav-item">
                <Link className=' text-decoration-none' to="/"><a className="nav-link active" aria-current="page" href="">Home</a></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">About</a>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <Link to={"/front-end"} className='text-decoration-none'><li><a className="dropdown-item" href="">Front-End</a></li></Link>
                  <li><a className="dropdown-item" href="">Back-End</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Online Training</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Contact</a>
              </li>
              <button type="button" className="btn btn-success" onClick={()=>setEnquiry(!enquiry)} >Enquairy</button>
            </ul>

          </div>
        </div>
      </nav>

        {enquiry ?<form className='enquiry'>
        <h6>Request for <br/> Class Room & Online Training Quotation</h6>
        <span><i className="bi bi-house-door-fill"></i>  Classroom<i className="bi bi-laptop"></i>  Online</span> <br/>
        <input type="text" className='input1' placeholder="Enter Your Name" required /> <br />
        <input type="email" placeholder="Enter Your Email" required /> <br />
        <input type="tel" placeholder="Enter Your Mobile No." required /> <br />
        <select name="" id="">
          <option >Select Course</option>
          <option>Full Stack</option>
          <option>AWS</option>
          <option>Data Science</option>
        </select> <br />
        <button>Submit Query</button>
      </form>:null}
       
    </div>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/front-end' element={<FrontEnd/>}></Route>
    </Routes>
    </Router>
  )
}

export default NavBar;