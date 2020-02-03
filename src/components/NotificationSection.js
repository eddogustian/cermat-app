import React from 'react';

const Notification = (props) => {
  return (
    <section id="js-cookie-box" className="cookie-box cookie-box--hide">
        <div className="notification-panel">
        <p> By accessing and using this Website, you acknowledge that you have read and <br></br> understand our <b>Cookie Policy, Privacy Policy, </b>and our<b> Terms of Service</b> <span id="js-cookie-button" className="cookie-button cookiebtn">Got it</span></p>
        </div>
    </section>  
  );
}
export default Notification;