import React from 'react'
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'

const Home = () => {
  return (
    <>
      <div className='home1'>

        <div className='passion mx-auto'>
            <h3 className='text-center'>About me</h3>
            <div className='flex1'>
              <div>
                  <h3> Welcome to my creative space where ideas come <br /> to life through design and innovation.</h3>
                  <h5 className='mt-3'>I design and code beautifully and I love what I do.</h5>
              </div>
              
              <div> <img src={akinola} alt="" /></div>
            </div>
          </div>
      </div>

      {/* <div className='bg'>
       
      </div> */}
  
    </>
  )
}

export default Home