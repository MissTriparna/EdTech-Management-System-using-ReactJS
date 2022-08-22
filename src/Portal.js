import React from 'react';
import eleven from "./eleven.jpg";


const Portal = () => {
  return (
    <div className='portal'>
    <div className="main-container">
         
        <div className="aside">
            <div className="logo">
                <a href=""><span>Ed</span>tech</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li><a href="#home1" className="active"><i className="fa fa-home"></i>Home</a></li>
                <li><a href="#about1"><i className="fa fa-user"></i>About</a></li>
                <li><a href="#progress1"><i className="fa fa-list"></i>Progress</a></li>
                <li><a href=""><i className="fa fa-briefcase"></i>Feedback</a></li>
                <li><a href="#contact1"><i className="fa fa-comments"></i>Contact</a></li>
            </ul>
        </div>

          


       
        <div className="main-content">

             


            <section id="home1" className="home section">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Welcome, <span className="name">Triparna</span></h3>
                            <h3 className="my-info">I'm a <span className="typing">Web Designer</span> </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                                 Quas consequatur voluptate corrupti quod, 
                                 dolor voluptates a perferendis molestias. </p>
                            <a href="#contact" className="btn hire-me">More About</a>
                        </div>
                        <div className="home-img padd-15">
                            <img src={eleven} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            


            <section id="about1" className="about section" hidden>
                <div className="row">
                    <section className="section-title padd-15">
                        <h2>About Me</h2>
                    </section>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>I am <span>Triparna</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Ratione mollitia debitis alias, sapiente, 
                                     praesentium voluptates nostrum quo, 
                                     provident consectetur enim neque recusandae consequatur. 
                                     Labore magnam sint cum hic voluptatum doloremque.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birthday : <span>14th january 2000</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Age : <span>22</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Gender : <span>Female</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Email : <span>triparna2901@gmail.com</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>className : <span>12</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Phone : <span>1236549870</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Address : <span>City Centre</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Birthday : <span>14th january 2000</span></p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            


            <section id="progress1" className="progress section" hidden>
                <div className="row">
                    <section className="progress-title padd-15">
                        <h2>My Progress</h2>
                    </section>
                </div>
                <div className="row">
                    <div className="progress-content padd-15">
                        <div className="row">
                            <div className="progress-text padd-15">
                                <h3>I am <span>Triparna</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Ratione mollitia debitis alias, sapiente, 
                                     praesentium voluptates nostrum quo, 
                                     provident consectetur enim neque recusandae consequatur. 
                                     Labore magnam sint cum hic voluptatum doloremque.</p>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skill-item padd-15">
                                        <h5>Mathematics</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: "92%"}}></div>
                                            <div className="skill-percent">92%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>Physics</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: "76%"}}></div>
                                            <div className="skill-percent">76%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>Chemistry</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: "82%"}}></div>
                                            <div className="skill-percent">82%</div>
                                        </div>
                                    </div>
                                    <div className="skill-item padd-15">
                                        <h5>Biology</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{width: "60%"}}></div>
                                            <div className="skill-percent">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            


            <section id="contact1" className="contact section" hidden>
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have You Any Query?</h3>
                    <h4 className="contact-sub-title padd-15">Contact Us</h4>
                    <div className="row">
                        
                        <div className="contact-info-item">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <h4>Call Us on</h4>
                            <p>+91-0123456789</p>
                        </div>
                        <div className="contact-info-item">
                            <div className="icon"><i className="fa fa-marker"></i></div>
                            <h4>Office</h4>
                            <p>Agartala</p>
                        </div>
                        <div className="contact-info-item">
                            <div className="icon"><i className="fa fa-envelope"></i></div>
                            <h4>Email</h4>
                            <p>abc@gmail.com</p>
                        </div>
                        <div className="contact-info-item">
                            <div className="icon"><i className="fa fa-globe"></i></div>
                            <h4>Website</h4>
                            <p>www.abc.com</p>
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
            </section>
            



        </div>
        
        
    </div>
    </div>
  )
}

export default Portal;
