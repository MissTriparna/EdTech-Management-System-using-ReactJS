import React, { useEffect, useState, Link } from "react";
import girl from "./girl.svg";
import launch from "./launch.svg";
// import "./sign.css";

const Sign = () => {


    const [user, setUser] = useState({
        name : '',
        dob : '',
        contact : '',
        email : '',
        password : '',
        eclass : '',
        subject : ''
      });
      let name, value;
      const getUserData = (event) =>{
        name = event.target.name;
        value = event.target.value;
    
        setUser({...user, [name]: value})
      };
    
      const postData = async (e) =>{
        e.preventDefault();
    
        const { name,dob,contact,email,password,eclass,subject } = user;
    
        if(name && dob && contact && email && password && eclass && subject){
          const rest = await fetch("https://edtech-cb3c6-default-rtdb.firebaseio.com/edtech.json",{
              method: "POST",
              headers: {
                "Content-Type":"application/json"
              },
              body : JSON.stringify({
                name,
                dob,
                contact,
                email,
                password,
                eclass,
                subject
              }),
        });
    
        if (rest) {
          setUser({
            name : '',
            dob : '',
            contact : '',
            email : '',
            password : '',
            eclass : '',
            subject : ''
          });
    
          alert("Data Stored Succesfully");
        }
        }
        else{
          alert("Plz fill the form");
        }
    
        
    
        
      };


    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
    },[])



const showSession = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const date = currentYear + '-' + nextYear;
    document.getElementById('date').innerHTML = date;
    console.log(new Date())
}

  return (
<div onLoad={showSession}>
    <div className="sign" >

    
        <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
            <form action="" className="sign-in-form" name="myform"  onsubmit="return validateform()">
                    <h2 className="title">Sign in</h2>
                    <div className="input-feild">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email" name="uname"/>
                    </div>
                    <div className="input-feild">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" name="pass"/>
                    </div>
                    <input type="submit" value="login" className="btn solid"/>

                    
                </form>

                <form action="" className="sign-up-form" name="yourform" method="POST">
                      <h2 className="title">Sign up</h2>
                      <div className="input-feild">
                          <i className="fa fa-calendar"></i>
                          <p>Session</p>
                          <span id="date"></span>
                      </div>
                      <div className="input-feild">
                          <i className="fas fa-user"></i>
                          <input type="text" placeholder="Name" name="name" value={user.name} onChange={getUserData} />
                      </div>
                      <div className="input-feild">
                          <i className="fas fa-user"></i>
                          <p>D.O.B</p>
                          <span  className="date">
                          <input type="date" placeholder="D.O.B" name="dob" value={user.dob} onChange={getUserData} /></span>
                      </div>
                      <div className="input-feild">
                          <i className="fas fa-address-book"></i>
                          <input type="text" placeholder="Contact" name="contact" value={user.contact} onChange={getUserData} />
                      </div>
                      <div className="input-feild">
                          <i className="fas fa-envelope"></i>
                          <input type="text" placeholder="Email" name="email" value={user.email} onChange={getUserData} />
                      </div>
                      <div className="input-feild">
                          <i className="fas fa-lock"></i>
                          <input type="password" placeholder="Password" name="password" value={user.password} onChange={getUserData} />
                      </div>
                      
  
                      <div className="input-feild">
                          <i className="fas fa-book"></i>
                          <select className="option" name="eclass" id="" value={user.eclass} onChange={getUserData} >
                              <option className="op">Class</option>
                              <option className="op" >09</option>
                              <option className="op" >10</option>
                              <option className="op" >11</option>
                              <option className="op" >12</option>
                          </select>
                      </div>
  
                       
  
                      <div className="input-feild">
                          <i className="fas fa-book"></i>
                          <select className="option" name="subject" id="" value={user.subject} onChange={getUserData}>
                              <option className="op" >Subjects</option>
                              <option className="op" >Mathematics</option>
                              <option className="op" >Physics</option>
                              <option className="op" >Chemistry</option>
                              <option className="op" >Biology</option>
                          </select>
                      </div>
  
                      <input type="submit" value="Sign up" className="btn solid" onClick={postData} />
  
                      
                  </form>

            </div>
        </div>
        <div className="panels-container">
         <div className="panel left-panel">
            <div className="content">
                <h3>Not Register yet?</h3>
                <p>To Register click the Sign up button</p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
            </div>
            <img src={launch} className="image" alt=""/>
         </div>
         
         <div className="panel right-panel">
            <div className="content">
                <h3>Have an account?</h3>
                <p>Click the Sign in button to login </p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </div>
            <img src={girl} className="image" alt=""/>
         </div> 

        </div>
    </div>
    </div>
    </div>
  );
}

export default Sign
