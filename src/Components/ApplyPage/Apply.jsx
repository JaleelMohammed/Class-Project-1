import './Apply.css'

export default function Apply() {
  return (
    <div className='row'>
        <div className=" col colm-1">

        <main>
            <h2 className='rj'>RJ</h2>
                 <strong >Technology</strong>

            <div className="footer">
            <h1>M.VERVE</h1>
            <strong>inspired Application</strong>

        </div>
            
            <p className="para3">To Connect with us <br/> Please Enter the Details</p>

        </main>
        </div>
        <div className="col colm-2">
          <h4>Create An Account</h4>

            <form >

          <div className="cols-lab">

            <label for="">First Name</label>
            <label for="">Last Name</label>
            <label for="">Age</label><br></br>
          </div>

              <div className="cols-inputs">
                 <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="18-100"/> 

              </div>


              <div class="cols-lab">
                    <label for="">Mobile Number</label> <br/>
                    <label for="">Email</label> <br/>
                </div>


                <div class="cols-inputs inputs-2">
                <input type="tel" placeholder="*****"/><br/>
                <input type="email" placeholder="abc@gmail.com"/><br/>

                </div>

                <div className="cols-3">
                  <label for="">Description</label> <br/>
                    <textarea name="" id="">abc@gmail.com</textarea>
                    <p className='p1'>Max.150 character</p>
                </div>

                <div className="cols-lab labs-3">
                  <label for="">Password</label>
                <label for="" className='cfm'>Confirm Password</label> <br/><br/>
                </div>

                <div className="cols-inputs inputs-2">
                  <input type="text" />
                  <input type="text" />
                </div>
            </form>

        </div>
    </div>
  )
}
