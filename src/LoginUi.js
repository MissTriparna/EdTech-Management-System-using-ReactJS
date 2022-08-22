import React, { useEffect } from "react";
import { useState } from "react";
import './LoginUi.css';
import profile from "./a.jpg";
import email from "./email.jpg";
import pass from "./pass.png";
// import {getDatabase, set, ref, onValue} from 'firebase/database'
// import {app} from "./firebaseConfig"


const LoginUi = ({uid}) => {
  const [uname, setUname] = useState('');
  const [upass, setUpass] = useState('');



const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// useEffect(() => {
//   const db = getDatabase(app)
//   onValue(ref(db, 'users/students'), (snap) => {
//     const value = snap.val()
//    if (value) {
//     console.log(value)
//    }
//    })
// }, [])

// const submit = () => {
//   const db = getDatabase(app)
//   const serverData = {
//     name: uname,
//     pass: upass,
//   }
//   const user = '12'
//     set(ref(db, 'users/teachers/' + user), serverData)
//     alert('You have succesfully logged in')
  
//   }


  return (
    <div className="tri">
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Teacher Login Portal</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Username" className="name" value={uname} onChange={(e) => setUname(e.target.value)}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name" value={upass} onChange={(e)=> setUpass(e.target.value)}/>
           </div>
          <div className="login-button">
          <button >Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> 
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </div>
  );

  }


export default LoginUi;
