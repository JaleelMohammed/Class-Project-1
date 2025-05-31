import './Footer.css'

export default function Footer() {
  return (
    <div className='body'>

        <div className="row footer d-flex ">
            <div className="col col-1">
                <i className='bi bi-mortarboard-fill'><span>RJ Technology</span></i>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo est et debitis, ipsa officiis tenetur velit excepturi sequi magni eveniet tempore tempora recusandae perspiciatis? Nihil veniam perspiciatis eaque pariatur fugiat.</p>
            </div>
            <div className="col col-2">
                <h5>Our Services</h5>
                <p>Mobile Application  Design</p>
                <p>Web Application  Design</p>
                <p>Website  Design</p>
                <p>Web User Interface Design</p>
                <p>Web UX Design and Research</p>
                <p>Theame Development Design</p>
            </div>
            <div className="col col-2 cols">
                <h5>Head Office</h5>
                <p>
                    1/2.Marathahalli,Bengaluru <br/>
                    Karnataka-560037,<br/>
                    Phone:+91 907564637 <br/>
                    Email:rjtechnology@gmail.com
                    <br/>
                    <h6>Office Time: <span>10AM-6PM</span></h6>
                </p>
            </div>

             <div className="col col-2">
                <h5>Subscribe Us</h5>
                <div className=""><input type="email" placeholder="Enter Email Address"/><i className="bi bi-telegram"></i> </div>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>

            </div>
        </div>
    </div>
  )
}
