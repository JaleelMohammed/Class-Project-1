import './Cards.css'
import course from '../../assets/course'

export default function Cards() {
  return (
    <>
          <div className='Cards'>
              <h3>Our Courses</h3>
              <p className='pr1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro temporibus vitae illum modi error incidunt iusto, voluptatum laboriosam beatae architecto, fuga placeat nulla laudantium aliquid, commodi laborum</p>

              <div className="rows1">

                {course.map((data,i)=>
                  <div className="cols-3" key={i}>
                      <h5 className='m-0'> {data.title}</h5>
                      <h6>{data.head}</h6>

                      <i className={data.icon}></i>
                      <i className={data.icon}></i>
                      <i className={data.icon}></i>
                      <i className={data.icon}></i>
                      <i className={data.icon}></i>
                     
                      <p>{data.para}</p>
                     
                      <button>{data.btn}</button>

                  </div>
                )}
                </div>

          </div>
    </>
  )
}
