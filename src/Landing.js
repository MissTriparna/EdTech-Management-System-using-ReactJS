import React, { Link } from 'react';
// import "./landing.css";
import image from "./icon.jpg";
import background from "./bg.jpg";
// import "./landing.css";
// import { Button } from 'semantic-ui-react'
// import LinkButton from '/components/LinkButton'


const Landing = () => {


    // const myStyle={backgroundImage:"url('bg.jpg)"};
  return (
    <div className='landing'>
    <div>
      <div className="banner" style={{ backgroundImage: `url(${background})`}}>
        <div className="navbar">
            <img style={{width: "50px" ,marginLeft: "-70px"}} src={image} />
            <h2 className="pogo">EdTech</h2>
            <p className="tag">For your <br/> convenience </p>
            
            <div className="bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                
                </ul>
            </div>
        </div>

        <div className="contact">
            <h1>Where Learning Begins</h1>
            

                <div>
                    <button type="button"><span></span> Teacher</button>
                    <button type="button"><span></span> Student</button>
                </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Landing
