import React from 'react'

// import "../ui/css/style.css";
// import "../ui/js/script";

const Footer = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>E-Commerce Website</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" href="../ui/css/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* font */} 
          <footer>
            <br /><br />
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h5>Developers</h5>
                  <ul>
                    <li><a href>Punit Kumar Meena</a></li>
                    <li><a href>Chirag Tank</a></li>
                    <li><a href>Anand Mishra</a></li>
                    <li><a href>Jayesh Gat</a></li>
                    <li><a href>Rohan Kaushal</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>College</h5>
                  <ul>
                    <li><a href>IIT-BHU</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Contact Us</h5>
                  <ul>
                    <li><a href>+91 7665443134</a></li>
                    <li><a href>+91 2344444421</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Social</h5>
                  <ul>
                    {/* <li><a href=""><i class="fab fa-facebook"></i>  Content</a></li>
              <li><a href=""><i class="fab fa-youtube"></i> Content</a></li> */}
                    <li><a href="https://twitter.com/Pkm_here12?t=mo6FtZmcZJ2ktIuSv4Zs4A&s=09"><i className="fab fa-twitter" /> ShopNow</a></li>
                    <li><a href="https://instagram.com/jayeshgat?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram" /> ShopNow</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <footer className="footer pt-5 pb-5" id="footer">
            <div className="container">
              <span className="text-muted float-left"><p id="copyright">© 2022 ShopNow</p></span>
              <span className="float-right"> <p id="footerInfo"> punit.kumarmeena.cse20@itbhu.ac.in | +91 8824605141 | IIT-BHU </p> </span>
            </div>
          </footer>
          <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-dark">
                  <h5 className="modal-title text-light" id="exampleModalCenterTitle">Login</h5>
                  <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body bg-light">
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                      <small id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else!</small>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Keep me Logined</label>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-sm"><a href="profile.html" className="text-light">Login</a></button>
                    <a href="register.html" className="float-right text-muted">Not a Member? Register</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer