import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll';
import '../styles/home.css'
import akinola from '../pics/akinola.jpg'
import Whatsapp1 from '../pics/WhatsApp1.jpg'
import prompt1 from '../cardpics/prompt1.png';
import finlog from '../cardpics/finlog.png'
import quizApp from '../cardpics/quizApp.png';
import tictactoe from '../cardpics/tictactoe.png';
import chat1 from '../cardpics/chat1.png'
import refine from '../cardpics/refine.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineMail}  from 'react-icons/ai'
import {BiSolidToTop} from 'react-icons/bi'


const Home = () => {

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
                                    Hi, I am Akinola Adewole, a full stack web developer. <br />
                                    Welcome to my creative space where ideas come <br /> to life through design and innovation.
                                  </h5>
                                  <h5 className='mt-3'>I design and code beautifully and I love what I do.</h5>
                              </div>
                          </div>

                            <div className='' data-aos="fade-left" data-aos-duration="2000" >
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
    
         <div className='mt aos-animate' data-aos="fade-up" data-aos-duration="2000" >
              
              <div className='container c1'>
                      
                      <div className='flexx1'>
                            
                          <div className=' card projectcard shadow m1'>
                                          <img src={refine} alt=""  className="card-img-top imgtop1"/>
                                  <div className="card-body">
                                    <div class="card-text">
                                                <h6>Rent Master</h6>
                                                <div>
                                                  Refine, Node.js, Google Auth, MongoDB, Material UI
                                                </div>

                                          <div className='card-action'>
                                            <div>
                                                <Link to='https://rentmaster.netlify.app' target='_blank' className='text-success'>
                                                  View site
                                                </Link>

                                                <Link to="https://github.com/AkinolaAdewole/Real-Estate---MERNSTACK"
                                                  target='_blank' className=' ms-2 text-success'>
                                                        Github repo
                                                  </Link>
                                            </div>
                                          </div>
                                    </div>
                                  </div>
                            </div>
                                          

                              <div className=' card projectcard shadow m2'>
                                      <img src={tictactoe} alt=""  className="card-img-top imgtop1"/>
                                      <div className="card-body">
                                          <div class="card-text">
                                            <h6>Tictactoe</h6>
                                            <div>JavaScript, HTML5, CSS3</div>
                                            <Link to='https://tictactoe-a.netlify.app' target='_blank' className='text-success'>
                                              View site
                                            </Link>

                                            <Link to='https://github.com/AkinolaAdewole/JavaScript-TicTacToe' target='_blank'
                                              className='text-success ps-2'>
                                                  Github repo
                                              </Link>
                                          </div>
                                      </div>
                              </div> 
                      </div>
                  </div>


            <div className='container'>
              <div className='flexx1 mt'>
                    
                   <div className=' card projectcard shadow m1'>
                                  <img src={chat1} alt=""  className="card-img-top imgtop1"/>
                          <div className="card-body">
                            <div class="card-text">
                                        <h6>Medical Chat App</h6>
                                         <div>
                                           React.js, Node.js, CSS3
                                         </div>

                                  <div className='card-action'>
                                    <Link to='https://medchatpro.netlify.app' target='_blank' className='text-success'>
                                      View site
                                    </Link>

                                    <Link to='https://github.com/AkinolaAdewole/Chat_App_for_Health_Practitioners' target='_blank'
                                              className='text-success ps-2'>
                                                  Github repo
                                      </Link>
                                  </div>
                            </div>
                          </div>
                    </div>
                                  

                      <div className=' card projectcard shadow m2'>
                              <img src={prompt1} alt=""  className="card-img-top imgtop1"/>
                              <div className="card-body">
                                  <div class="card-text">
                                    <h6>Promptopia</h6>
                                    <div>Next.js, Node.js, CSS3, TailwindCSS </div>
                                        <Link to='https://promptopia-five-olive.vercel.app' target='_blank' className='text-success'>
                                          View site
                                        </Link>

                                        <Link to='https://github.com/AkinolaAdewole/Next--Promptopia' target='_blank'
                                              className='text-success ps-2'>
                                                      Github repo
                                          </Link>
                                  </div>
                              </div>
                      </div> 
              </div>
           </div>

           <div className="container">
              <div className="flexx1 mt">
                  <div className=' card projectcard shadow m1'>
                                    <img src={finlog} alt=""  className="card-img-top imgtop1"/>
                                     <div className="card-body">
                                        <div class="card-text">
                                          <h6>Finance Logger</h6>
                                          <div> TypeScript, CSS3</div>

                                          <div className='card-action'>
                                            <Link to='https://finlog.netlify.app/' target='_blank' className='text-success'>view site</Link>

                                            <Link to='https://github.com/AkinolaAdewole/Typescript-Finance-Logger' target='_blank'
                                              className='text-success ps-2'>
                                                  Github repo
                                            </Link>
                                          </div>
                                        </div>
                                     </div>
                    </div>
                        
                    <div className=' card projectcard shadow m2'>
                            <img src={quizApp} alt=""  className="card-img-top imgtop1"/>
                              <div className="card-body">
                                    <div class="card-text">
                                                  <h6>Quiz app</h6>
                                                  <div> React, Redux, CSS3, Bootstrap5</div>

                                        <div className='card-action'>
                                          <Link to='https://akinolaquizworld.netlify.app' target='_blank' className='text-success'>
                                            View site
                                          </Link>

                                          <Link to='https://github.com/AkinolaAdewole/React-QuizApp' target='_blank'
                                              className='text-success ps-2'>
                                                  Github repo
                                          </Link>
                                       </div>
                                  </div>                                               
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
                    <Link  className='text-decoration-none text-white'>Rent master</Link> <br />
                    <Link className='text-decoration-none text-white'>Promptopia</Link>
                  </div>

                    <div className='connectme'>
                      <h6 className='text-white'>Connect with me</h6>
                      <div>
                        <Link to='https://wa.me/+2348144744865' target='_blank' className='text-success'> <BsWhatsapp /> </Link>
                        <Link to='https://github.com/AkinolaAdewole?tab=repositories' target='_blank' className='ms-2 text-success'><AiOutlineGithub /> </Link>
                        <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' className='ms-2 text-success'> <AiOutlineMail /></Link>
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