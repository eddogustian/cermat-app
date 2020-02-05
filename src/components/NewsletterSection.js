import React, { useState }  from 'react';

const Newsletter = (props) => {
    // Deklarasi variabel state baru yang kita sebut "count"
    const [classHideNewst, setHideNewst] = useState('');

    const handleNewsletter = () => {
        setHideNewst('js-is-hidden'); 

        const started = localStorage['started'];
        localStorage['started'] = Date.now();

        if(started) {
            const diff = Date.now() - started;
            if(diff >= 1000 * 10) { //ketika sdh 10 menit
                //lakukan pemunculan newsletter lagi
                setHideNewst('');
            } 
        } else {
            //melakukan apa ya disini enaknya
            
        } //done
        
    }

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