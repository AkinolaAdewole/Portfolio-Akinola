import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'
import Whatsapp1 from '../pics/WhatsApp1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-back'
    })
  },[]);

  return (
    <>
      <div className='home1' >
        <div className='passion mx-auto'>
           <div className=' '>
              <h4 className='text-center'>About me</h4>
                <div className='row'>
                  <div className='flex1 pt5'>

                    <div>
                        <div className='aboutme'> 
                            <h5 className=''> 
                              Welcome to my creative space where ideas come <br /> to life through design and innovation.
                            </h5>
                            <h5 className='mt-3'>I design and code beautifully and I love what I do.</h5>
                        </div>
                    </div>

                      <div className='' data-aos="fade-left" data-aos-duration="3000" >
                        <img className='img1 imgpadding' src={akinola}  />
                      </div>
                 </div>
                </div>
           </div>
        </div>
      </div>

           
           {/* Some of my Projects */}
        
        <section className='section2 mb'>

               <div> <h3 className='textAlign pt-5'>Some of my projects</h3> </div>
                
              <div className='mt' >

                    <div className='flex1'>
                        <div className=' card projectcard m1' data-aos="fade-up" data-aos-duration="3000">
                                    <img src="" alt=""  className="card-img-top"/>
                                      <div className="card-body">
                                        <p class="card-text">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                      </div>
                        </div>

                            <div className=' card projectcard m2' data-aos="fade-up" data-aos-duration="3000">
                                    <img src="" alt=""  className="card-img-top"/>
                                    <div className="card-body">
                                        <p class="card-text">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                    </div>
                            </div> 
                     </div>


                      <div className="flex1 mt">
                           <div className=' card projectcard m1' data-aos="fade-up" data-aos-duration="2000">
                                    <img src="" alt=""  className="card-img-top"/>
                                 <div className="card-body">
                                        <p class="card-text">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                 </div>
                           </div>

                            <div className=' card projectcard m2' data-aos="fade-up" data-aos-duration="2s000">
                                    <img src="" alt=""  className="card-img-top"/>
                                  <div className="card-body">
                                        <p class="card-text">
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                  </div>
                            </div>
                      </div>

              </div>

        </section>





          {/* contact me for project*/}

            <section className='section3'>

              <div className='divcontact'>

                    <div className='pt-3' > 
                          <h5 className='textAlign divh5'> Have an interesting project? </h5> 
                    </div>

                    <div> <p className='textAlign'> I know you've got that amazing idea, contact me today. </p> </div>


                    <div className='flex1 pt-5'>

                        <div className='contact1'>
                            <div className='contactme'>
                                <h5>
                                    Call +2348144744865
                                </h5>

                                <h5> or</h5>

                                <h5>
                                  <Link to="https://wa.me/+2348144744865"> Click</Link>, let's chat on whatsapp 
                                  <br /> to discuss further.
                                </h5>
                            </div>
                        </div>


                        <div className=''> 
                            <img className='img2' src={Whatsapp1}  alt="" />
                        </div>

                    </div>
              </div>
              
            </section>



    <footer>
   
      <div className='footercontainer pt-3'>
         <div>
          <div>
            <h5> Recent works</h5>
            <p><Link  className='text-decoration-none text-white'>Real Estate</Link> </p>
            <p> <Link className='text-decoration-none text-white'>Promptopia</Link></p>
          </div>

          <div>
            <h6>connect with me</h6>
            <div>
              <Link> <i class="fa-brands fa-github"></i> </Link> 
            </div>
          </div>
         </div>
      </div>
    </footer>
  
    </>
  )
}

export default Home