import React, { useState }  from 'react';

const Newsletter = (props) => {
    // Deklarasi variabel state baru yang kita sebut "classHideNewst"
    const [classHideNewst, setHideNewst] = useState('');
    
    const handleNewsletter = () => {
        setHideNewst('js-is-hidden'); 
        const Timer = object => {
          const endDate = Date.parse(object.endDate);
          let container = document.getElementById(object.id);

          const countDown = setInterval(() => {
            let currentDate, distance, days, hours, minutes, seconds;

            currentDate = Date.now();
            distance = endDate - currentDate;

            // calculations
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);


           
          if (object.debug) {
            console.log(`Days remaining: ${distance}`);
          }
      
          if (distance < 0) {
            clearInterval(countDown);
            container.innerHTML = "";
          }
          }, 1000);
        };
        Timer({
          id: "countdown",
          endDate: "Feb-25-2020 00:00",
          debug: false
        })
       
        
       
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
                    <div>
                      <h1 className="text--center animation--moveLeft">Countdown Timer</h1>
                    </div>

                    <div id="{countdown}" className="countdown flex flex--space-evenly">
                    
                    </div>
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
                                <div className="col-lg-4 my-md-2 my-2"><button type="submit" className="btn btn-newsletter">Count me in!</button></div>
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