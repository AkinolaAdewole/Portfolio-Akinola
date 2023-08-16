import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'
import Whatsapp1 from '../pics/WhatsApp1.jpg'


const Home = () => {
  return (
    <>
      <div className='home1' >
        <div className='passion mx-auto'>
           <div className=' '>
              <h4 className='text-center'>About me</h4>
                <div className='row'>
                  <div className='flex1 pt-5'>
                    <div>
                        <h5> Welcome to my creative space where ideas come <br /> to life through design and innovation.</h5>
                        <h5 className='mt-3'>I design and code beautifully and I love what I do.</h5>
                    </div>

                    <div className='delay'> <img className='img1' src={akinola}  /></div>
                 </div>
                </div>
           </div>
        </div>
      </div>

           
           {/* Some of my Projects */}
     
     <section className='section2'>
       <div> <h3 className='textAlign pt-5'>Some of my projects</h3> </div>
       
       <div className=''></div>
     </section>

          {/* contact */}

    <section className='section3'>
      <div className='divcontact'>
        <div className='pt-3' > 
          <h5 className='textAlign divh5'> Have an interesting project? </h5> 
        </div>
        <div> <p className='textAlign'> I know you've got that amazing idea, contact me today. </p> </div>


        <div>
         <div className='contact1'> <Link to="https://wa.me/+2348144744865"> Click</Link> let's chat on whatsapp 
            <br /> to discuss further.
         </div>

        <div></div>
      </div>
      </div>

      
    </section>

    <footer>
      <div></div>
    </footer>
  
    </>
  )
}

export default Home