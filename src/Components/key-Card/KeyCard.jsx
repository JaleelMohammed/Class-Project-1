import './KeyCard.css'
import Items from '../../assets/Items'

export default function KeyCard() {
  const{icon,title,para}=Items;
  return (
    <>
    <div className='card-1'>
        <h3>Key Features</h3>
         <p className='pr1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro temporibus vitae illum modi error incidunt iusto, voluptatum laboriosam beatae architecto, fuga placeat nulla laudantium aliquid, commodi laborum</p>
          <div className='card1'>
             {Items.map((data,i)=>
              <fieldset key={i}>
                <legend><i className={data.icon}></i></legend>
                <h5>{data.title}</h5>
                <p>{data.para}</p>
              </fieldset>

             )}
            </div>
    </div>

    </>
  )
}
