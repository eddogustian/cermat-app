import React, { Component } from 'react';

import logo from './../assets/images/y-logo-white.png';

class Hero extends Component {
  render() {
    return (
    <section id="header" className="cta-header">
        <div className="hero-shot">
            <h1>Hello! I’m Eddo Gustian</h1>
            <h2>Consult, Design, and Develop Websites</h2>
            <p>Have something great in mind? Feel free to contact me.</p>
            <p>I'll help you to make it happen.</p>
            <button type="button" className="btn btn-lets">Let's Make Contact</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="overlay"></div>
    </section>
    );
  }
}

export default Hero;