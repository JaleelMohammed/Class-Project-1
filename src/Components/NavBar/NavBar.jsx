import './Navbar.css'

function NavBar() {
  return (
    <div>
      <marquee behavior="alternate" direction="rtl" className="bg-warning" ><h5>Our Best offer Ever!! Summer Special- Get 3 Courses at 22499/-only. <a href="" className=' text-primary '>Read More</a></h5></marquee>

      <header className='d-flex p-3 px-5 '>
        <div className='d-flex  gap-5 '>
          <h5 className='text-center'>Email:<span className=''> rjtechnology@gmail.com</span></h5>
          <h5 className=''>Contact:<span className=''> +91 8796354678</span></h5>
        </div>
        <div className=' col d-flex gap-5 fs-5 px-5 justify-content-end'>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </header>


      <nav class="navbar navbar-expand-lg navbar-light ">

        <div class="container-fluid">
          <a class="navbar-brand" href="#"><i className='bi bi-mortarboard-fill text-success fs-3'><span className='px-2 fs-3 fw-bold'>RJ Technology</span></i></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse apps" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About</a>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Course
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Front-End</a></li>
                  <li><a class="dropdown-item" href="#">Back-End</a></li>

                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Online Training</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <button type="button" class="btn btn-success ">Enquairy</button>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar