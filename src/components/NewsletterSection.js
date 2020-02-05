import React, { useState, useEffect }  from 'react';

const Newsletter = (props) => {
    function CountdownTimer() {
        const calculateTimeLeft = () => {
          const difference = +new Date("2020-02-06") - +new Date();
          let timeLeft = {};
      
          if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }
      
          return timeLeft;
        };
      
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
        useEffect(() => {
          setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
          }, 1000);
        });
      
        const timerComponents = [];
      
        Object.keys(timeLeft).forEach(interval => {
          if (!timeLeft[interval]) {
            return;
          }
      
          timerComponents.push(
            <span>
              {timeLeft[interval]} {interval}{" "}
            </span>
          );
        });
      
        return (
          <div>
            <h1>Alligator.io New Year's 2020 Countdown</h1>
            <h2>With React Hooks!</h2>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
        );
      }
    // Deklarasi variabel state baru yang kita sebut "classHideNewst"
    const [classHideNewst, setHideNewst] = useState('');

    const handleNewsletter = () => {
        setHideNewst('js-is-hidden'); 

        // let startTime = new Date();
        // window.localStorage.setItem('startTime', startTime);
        // return startTime;
    }
    // useEffect(() => {
    //     let startTime;
    //     document.title = `You clicked ${handleNewsletter} times`;
    //     startTime = new Date(window.localStorage.getItem('startTime'));
    //     window.setInterval(function(){
    //         var secsDiff = new Date().getTime() - startTime.getTime();
    //     })
    //   });

  return (
    <section id="newsletterpanel" className={`${classHideNewst}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-7 bg-newsletterpanel">
                    <div className="">
                        <small className="newsletter" onClick={handleNewsletter}><i className="fa fa-times"></i></small>
                        <h3 className="panel-title">Get latest updates in web technologies</h3>
                        <div className="panel-body">
                            <p>I write articles related to web technologies, such as design trends, development
                                tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                                them all.
                            </p>
                            <form action="#" className="row">
                                <div className="col-lg-8 my-md-2 my-2">
                                    <input type="text" className="form-control" placeholder="Email address"></input>
                                </div>
                                <div class="col-lg-4 my-md-2 my-2"><button type="submit" class="btn btn-newsletter">Count me in!</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Newsletter;