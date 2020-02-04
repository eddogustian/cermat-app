import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Notification = (props) => {
  const [hideClass, setHideClass] = useState('');
  const handleCookies = () => {
    const cookieBox = document.getElementById('js-cookie-box');
    const cookieButton = document.getElementById('js-cookie-button');
    setHideClass('cookie-box--hide');
    console.log(hideClass);
    if (!Cookies.get('cookie-box')) {
      
    cookieBox.classList.remove('cookie-box--hide');
      
      cookieButton.onclick = function() {
        
        Cookies.set('cookie-box', true, { expires: 7 });
       
        cookieBox.remove('#cookie-box',true,);
        cookieBox.classList.add('cookie-box--hide');
      }
    }
  }
  return (
    <section id="js-cookie-box" className={`cookie-box ${hideClass}`}>
        <div className="notification-panel">
        <p> By accessing and using this Website, you acknowledge that you have read and <br></br> understand our <b>Cookie Policy, Privacy Policy, </b>and our<b> Terms of Service</b> <span id="js-cookie-button" className="cookie-button cookiebtn" onClick={handleCookies} >Got it</span></p>
        </div>
    </section>  
  );
}
export default Notification;