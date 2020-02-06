import React, { useState }  from 'react';

const Newsletter = (props) => {
    // Deklarasi variabel state baru yang kita sebut "classHideNewst"
    const [classHideNewst, setHideNewst] = useState('');

    const handleNewsletter = () => {
        setHideNewst('js-is-hidden'); 
        // const total_seconds = localStorage('total_seconds');
        if(localStorage.getItem('total_seconds')){
          let total_seconds = localStorage.getItem('total_seconds');
        }else {
          let total_seconds = 60*10;
        }
        let minutes = parseInt(total_seconds/60);
        let seconds = parseInt(total_seconds%60);
        function countDownTimer() {
          if(seconds < 10){
            seconds = '0'+ seconds;
          }if(minutes < 10){
            minutes= '0'+ minutes;
          }
          let time_life = document.getElementById('time_life').innerHTML = "Time Left :"+minutes+"minutes"+seconds+"seconds";
          if(total_seconds <= 0) {
            setTimeout("document.quiz.submit()",1);
          }else
           {
            total_seconds = total_seconds -1 ;
            minutes = parseInt(total_seconds/60);
            seconds = parseInt(total_seconds%60);
            localStorage.setItem("total_seconds",total_seconds)
            setTimeout("countDownTimer()",1000);
           }
        }
        setTimeout("countDownTimer()",1000);
        
       
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