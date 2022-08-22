import React from "react";
import profile from "./a.jpg";
//import "./TeacherDashboard.css"
class Dashboard extends React.Component{

    render(){
        return(    
     <div className="aj">
        
                <nav>
        <div class="logo-name">
            <div class="logo-image">
            <img src={profile} alt="profile" className="profile"/>
            </div>

            <span class="logo_name">Teacher</span>
        </div>

        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Dashboard</span>
                </a></li>
                <li><a href="/user/user.js">
                    <i class="uil uil-user-circle"></i>
                    <span class="link-name">User</span>
                </a></li>
                <li><a href="#">
                <i class="uil uil-user-exclamation"></i>
                    <span class="link-name">Pending Activity</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-book"></i>
                    <span class="link-name">Results</span>
                </a></li>
                <li><a href="#">
                <i class="uil uil-bill"></i>
                    <span class="link-name">Fees</span>
                </a></li>
                
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                    
                </a></li>

                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"></i>
                    <span class="link-name">Dark Mode</span>
                </a>

                <div class="mode-toggle">
                  <span class="switch"></span>
                </div>
            </li>
            </ul>
        </div>
    </nav>

    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            
            
            <img src={profile} alt="profile" className="profile"/>
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <i class="uil uil-tachometer-fast-alt"></i>
                    <span class="text">Dashboard</span>
                </div>

                <div class="boxes">
                    <div class="box box1">
                    <i class="uil uil-user-exclamation"></i>
                        <span class="text">Pending Registration</span>
                        <span class="number">567</span>
                    </div>
                    <div class="box box2">
                        <i class="uil uil-user-check"></i>
                        <span class="text">New Students</span>
                        <span class="number">200</span>
                    </div>
                    <div class="box box3">
                        <i class="uil uil-receipt"></i>
                        <span class="text">Pending Fees</span>
                        <span class="number">23</span>
                    </div>
                </div>
            </div>

            

                
                
            
        </div>
    </section>

     </div>
        );
    }

}
export default Dashboard