import React from 'react'
//import "./../user/user.css"

class User extends React.Component{
    render() {
        return(
            <div className='trifu'>

            
<header>

<div className="user">
    <img src="assets/a.jpg" alt=""/>
    <h3 className="name">Ajay Das</h3>
    <p className="post">Physics Teacher</p>
</div>

<nav className="navbar">
    <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</nav>

</header>

{/* <!-- header section ends --> */}

{/* <div id="menu" className="fas fa-bars"></div> */}

{/* <!-- home section starts  --> */}

<section className="home" id="home">

<h3>HI THERE !</h3>
<h1>I'M <span>Ajay Das</span></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
</p>
<a href="#about"><button className="btn">about me <i className="fas fa-user"></i></button></a>

</section>

{/* <!-- home section ends -->

<!-- about section starts  --> */}

<section className="about" id="about">

<h1 className="heading"> <span>about</span> me </h1>

<div className="row">

<div className="info">
    <h3> <span> name : </span> Ajay Das </h3>
    <h3> <span> age : </span> 20 </h3>
    <h3> <span> qualification : </span> BMS </h3>
    <h3> <span> post : </span> Physics </h3>
    <h3> <span> language : </span> English </h3>
    
</div>

<div className="counter">

    <div className="box">
        <span>2+</span>
        <h3>years of experience</h3>
    </div>

    <div className="box">
        <span>100+</span>
        <h3>Seminars</h3>
    </div>

    <div className="box">
        <span>430+</span>
        <h3>Happy Students</h3>
    </div>


</div>

</div>

</section>

{/* <!-- about section ends -->

<!-- education section starts  --> */}

<section className="education" id="education">

<h1 className="heading"> my <span>education</span> </h1>

<div className="box-container">

<div className="box">
    <i className="fas fa-graduation-cap"></i>
    <span>2016</span>
    <h3>Bachelor in Science</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
</div>

<div className="box">
    <i className="fas fa-graduation-cap"></i>
    <span>2018</span>
    <h3>Master in Physics</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
</div>

<div className="box">
    <i className="fas fa-graduation-cap"></i>
    <span>2021</span>
    <h3>Phd in Physics</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
</div>


</div>

</section>

{/* <!-- education section ends -->



<!-- contact section starts  --> */} 
<section className="contact" id="contact">

<h1 className="heading"> <span>contact</span> me </h1>

<div className="row">

<div className="content">

    <h3 className="title">contact info</h3>

    <div className="info">
        <h3> <i className="fas fa-envelope"></i> aj123@gmail.com </h3>
        <h3> <i className="fas fa-phone"></i> +123-456-7890 </h3>
        <h3> <i className="fas fa-phone"></i> +111-222-3333 </h3>
        <h3> <i className="fas fa-map-marker-alt"></i> Tripura , India - 400104. </h3>
    </div>

</div>

<form action="">

    <input type="text" placeholder="name" className="box"/>
    <input type="email" placeholder="email" className="box"/>
    <input type="text" placeholder="project" className="box"/>
    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
    <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

</form>

</div>

</section>
{/* 
<!-- contact section ends -->


<!-- scroll top button  --> */}

<a href="#home" className="top">
<img src="images/scroll-top-img.png" alt=""/>
</a>


         </div>
        );
       
    }
}


export default User