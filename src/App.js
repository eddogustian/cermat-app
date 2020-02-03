import React from 'react';

import Notification from "./components/NotificationSection";
import Hero from "./components/HeroSection";
import Body from "./components/BodySection";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsletterSection";
import "./App.css";

const App = (props) => {
    return (
      <div className="Container">
        <Notification />
        <Hero />
        <Body />
        <Footer />
        <Newsletter />
      </div>
    );
}
export default App;