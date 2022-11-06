import React from 'react'

const login = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>E-Commerce Website</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* font */} 
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4 d-block mx-auto mt-2 mb-3" id="join">
                  <h4 className="pb-4">Login</h4>
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username(first name)" />
                    </div>
                    <div>
                      <select className="form-control form-control">
                        <option disabled>Select Role:</option>
                        <option>Buyer</option>
                        <option>Seller</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <br />
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary btn-sm text-light"><a href="profile.html" className="text-light">Login</a></button>
                    <a href="register.html" className="float-right text-primary">Not a Member? Register</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
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
                    <button type="submit" className="btn btn-secondary btn-sm text-light"><a href="profile.html" className="text-light">Login</a></button>
                    <a href="register.html" className="float-right text-muted">Not a Member? Register</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default login