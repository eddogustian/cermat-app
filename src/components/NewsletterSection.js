import React from 'react';

const Newsletter = (props) => {
    const handleNewsletter = () => {
      
            const started = localStorage['started'];
        
            if (started) {
                // This is not the first time the user opens this file
                // How long has it been?
        
                const diff = Date.now() - started;
        
                if (diff >= 1000 * 60 * 1) {
                    alert('udah sepuluh menit');
                    // At least one week has passed. Do something here.
                } else {
                    // Less than a week has passed. Do something else here.
                }
            } else {
                // This is the first time the user opens this file
        
                localStorage['started'] = Date.now();
        
                // Do something else here to welcome the user...
            }
       
    }

  return (
    <section id="newsletterpanel">
        <div className="container">
            <div className="row">
                <div className="col-md-7 bg-newsletterpanel">
                    <div className="">
                        <small className="btn-x" onclick="handleNewsletter()"><i className="fa fa-times"></i></small>
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