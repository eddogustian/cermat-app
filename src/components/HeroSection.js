import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
    <section className="hero">
        <div className="hero-shot">
            <h1>Hello! I’m Eddo Gustian</h1>
            <h2>Consult, Design, and Develop Websites</h2>
            <p>Have something great in mind? Feel free to contact me.</p>
            <p>I'll help you to make it happen.</p>
            <button type="button" class="btn btn-lets">Let's Make Contact</button>
        </div>
        <div class="overlay"></div>
        {/* <img src="images/y-logo-white.png" alt="logo cermati" height="42" width="42"> */}
    </section>
    );
  }
}

export default Hero;