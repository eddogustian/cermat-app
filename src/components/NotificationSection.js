import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";


const Notification = (props) => {
  const handleCookies = () => {
    Cookies.set("test", "nice")
  }
  return (
    <CookieConsent
      disableStyles={true}
      location="top"
      expires={150}
      buttonText="GOT IT"
      buttonClasses="btn btn-primary"
      containerClasses="col-lg-12"
      contentClasses="text-capitalize"
    >
      By accessing and using this Website, you acknowledge that you have read and <br></br> understand our <b>Cookie Policy, Privacy Policy, </b>and our<b> Terms of Service</b>
  </CookieConsent>
  );
}
export default Notification;

