import React from 'react'
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'

const Home = () => {
  return (
    <>
      <div className='home1'>

        <div className='passion mx-auto'>
           <div className=' '>
              <h4 className='text-center'>About me</h4>
                <div>
                  <div className='flex1 pt-5'>
                    <div>
                        <h5> Welcome to my creative space where ideas come <br /> to life through design and innovation.</h5>
                        <h5 className='mt-3'>I design and code beautifully and I love what I do.</h5>
                    </div>

                    <div className=''> <img className='img1' src={akinola}  /></div>
                 </div>
                </div>
           </div>
        </div>
      </div>

      {/* <div className='bg'>
       
      </div> */}
  
    </>
  )
}

export default Home