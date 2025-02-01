import { useState } from "react";
import "./header.css";

export const Header = ({setFilter}) => {
    const [hover, setHover] = useState(true);
    
  return (
      <div className='container header'>
          <div className="Navbar">
              <div className="left">
                  <img src="/logo.png" alt="logo" className="logoImg" />
                  <ul className="navContainer">
                      <li className="items">Home</li>
                      <li className="items active">Categories</li>
                      <li className="items">About Us</li>
                      <li className="items">Contact Us</li>
                      <li className="items">FAQs</li>
                  </ul>
              </div>
              <div className="right">
                  <img src="/shopping bag.png" alt="pagIcon" />
                  <img src="/notification 03.png" alt="notificationIcon" />
                  <span className="iconContainer en" onClick={()=>setHover(!hover)}>
                      <p>EN</p>
                      <img src="/up.png" alt='uplogo' />
                      <div className="langContainer" style={{display:hover&&"none"}}>
                          <span className="english">English</span>
                          <span className="lang">Arabic</span>
                      </div>
                  </span>
                  <span className="iconContainer">                      
                      <img src="/Vector.png" alt='user'/>
                      <img src="/Group.png" alt='groupLogo'/>
                  </span>
              </div>
              <div className="menu" onClick={()=>setFilter(true)}><img src="/Group (1).png" alt="menulogo" /></div>
          </div>
          <div className="headerBottom">
              <h4>Bags</h4>
              <span>bags</span>
          </div>
    </div>
  )
}
