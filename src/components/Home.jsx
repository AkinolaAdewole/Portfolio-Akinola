import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll';
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'
import Whatsapp1 from '../pics/WhatsApp1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineMail}  from 'react-icons/ai'
import {BiSolidToTop} from 'react-icons/bi'


const Home = () => {
  const contact = useRef(null);

  const currentYear = new Date().getFullYear();

  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-back'
    })
  },[]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
     <Element name='aboutme'>
          <div className='home1'>
              <div className='passion mx-auto'>
                <div className=' '>
                    <h4 className='text-center'>About me</h4>
                      <div className='row'>
                        <div className='flex1 pt5'>

                          <div>
                              <div className='aboutme'> 
                                  <h5 className=''> 
                                    Hi, I am Akinola Adewole, a fullstack web developer. <br />
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
     </Element>

           
           {/* Some of my works */}
        
  <Element name='works'>
    <section className='section2 mb'>

             <div> <h3 className='textAlign pt-5'>Some of my works</h3> </div>
    
         <div className='mt' >
            <div className='container'>
              <div className='flexx1'>
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
         </div>

          <div className="container">
              <div className="flexx1 mt">
                        <div className=' card projectcard m1' data-aos="fade-up" data-aos-duration="2000">
                                  <img src="" alt=""  className="card-img-top"/>
                              <div className="card-body">
                                      <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                              </div>
                        </div>

                          <div className=' card projectcard m2' data-aos="fade-up" data-aos-duration="2000">
                                  <img src="" alt=""  className="card-img-top"/>
                                <div className="card-body">
                                      <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                      </p>
                                </div>
                          </div>
                    </div>
          </div>
     </div>

    </section>
  </Element>


          {/* contact me for project*/}

  <Element name='contact'>
          <section className='section3'>

                <div className='divcontact'>

                      <div className='pt-3' > 
                            <h5 className='textAlign divh5'> Have an interesting project? </h5> 
                      </div>

                      <div> <p className='textAlign'> I know you've got that amazing idea, contact me today. </p> </div>


                      <div className='flex1 pt-4'>

                          <div className='contact1'>
                              <div className='contactme'>
                                  <h5 className='text-success'>
                                      Call +2348144744865
                                  </h5>

                                  <h5 className='text-success'> or</h5>

                                  <h5 className='text-success'>
                                    <Link to="https://wa.me/+2348144744865" target='_blank' 
                                    className='text-success'> Click</Link>, let's chat on whatsapp to discuss
                                      <br /> further.
                                  </h5>
                              </div>
                          </div>


                          <div className=''> 
                              <img className='img2' src={Whatsapp1}  alt="" />
                          </div>

                      </div>
                </div>

          </section>
  </Element>

    <footer>
   
      <div className='footercontainer pt-3'>
            <div className='flexx mt5'>
                  <div>
                    <h5 className='text-white'> Recent works</h5>
                    <Link  className='text-decoration-none text-white'>Real Estate</Link> <br />
                    <Link className='text-decoration-none text-white'>Promptopia</Link>
                  </div>

                    <div className='connectme'>
                      <h6 className='text-white'>Connect with me</h6>
                      <div>
                        <Link to='https://wa.me/+2348144744865' target='_blank' className='text-success'> <BsWhatsapp /> </Link>
                        <Link to='https://github.com/AkinolaAdewole' target='_blank' className='ms-2 text-success'><AiOutlineGithub /> </Link>
                        <Link target='_blank' className='ms-2 text-success'> <AiOutlineMail /></Link>
                      </div>
                    </div>
            </div>
      </div>


                {/* All right reserved */}
            <div className='btn rightReserved flex2'>
                   <p className='text-white'>&copy; {currentYear} Akinola. All rights reserved.</p>

                  <div onClick={scrollToTop} className='scrollToTop'>
                    <span> < BiSolidToTop  className=' text-white '/></span>
                  </div>
            </div>

    </footer>
  
    </>
  )
}

export default Home