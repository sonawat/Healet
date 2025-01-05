import React from 'react'
import './Button.css'
import { useState } from 'react'
const Button = () => {
    const[ac,setAc] = useState(true);

    const newd = {
            display : ac?'block':'none'
    }
  return (
//     <div>
//         <button className='bfix' onClick={()=>setAc(!ac)}>=</button>

//         <div className='divfix' style={newd}>
// err33r3r33
//         </div>
//     </div>
<div className="container">
 {/* <h1>
    <a href="#menu">Click me</a>
 </h1> */}
       <a href='#menu'><button className='bfix' style={newd} onClick={()=>setAc(!ac)}>=</button></a>
    
<div className="popover" id="menu">
 <div className = 'content'>
  <a href="#" className="close" onClick={()=>setAc(!ac)}></a>
   <div className = 'nav'>
    <ul className = 'nav_list'>
      
      <div className = 'nav_list_item'>
	  <li><a href="#Home" onClick={()=>setAc(!ac)}>Home</a></li>
      </div>
     <div className = 'nav_list_item'>
		<li><a href="#About" onClick={()=>setAc(!ac)}>About</a></li>
      </div>
    <div className = 'nav_list_item'>
	  <li><a href="#Latest" onClick={()=>setAc(!ac)}>Latest</a></li>
      </div>
    <div className = 'nav_list_item'>
	  <li><a href="#Offer" onClick={()=>setAc(!ac)}>Offer</a></li>
      </div>
     <div className = 'nav_list_item'>
		<li><a href="#Testimonial" onClick={()=>setAc(!ac)}>Testimonial</a></li>
      </div>
      
	</ul>
  </div>
 </div>
 </div>
 </div>

  )
}

export default Button
