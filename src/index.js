import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';
import Sign from './Sign';
import "./app.css"; 
import Tri from './Tri';
import Portal from './Portal';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>hello</h1> */}
    <Tri/>
    {/* <Sign/> */}
    {/* <Landing/> */}
    {/* <Portal/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
