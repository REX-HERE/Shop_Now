import React from 'react'

const Navbar = () => {

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>E-Commerce Website</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      {/* <link rel="stylesheet" href="../ui/css/style.css" /> */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      {/* font */} 
      <div className="container mt-4" id="top-logo">
        <div className="row">
          <div className="col-md-2" style={{right: '5%'}}>
            {/* Just an image */}
            <nav className="navbar navbar-light">
              <a className="navbar-brand" href="home.html">
                <img src="https://res.cloudinary.com/dxo3abzy2/image/upload/v1667666364/DBMS2/shopnownavbar_z0adui.png" width={40} height={40} />
              </a>
            </nav>
          </div>
          <div className="col-md-7" id="searchbar">
            <div className="input-group mt-3">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <div className="input-group-append">
                {/* <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search" /></button> */}
              </div>
            </div>
          </div>
          <a href="login.html">
          </a><div className="col-md-3 mt-2" id="icons"><a href="login.html">
              <div style={{cursor: 'pointer'}} className="circle float-right" data-toggle="modal" data-target="#loginModal" data-placement="top" title="LOGIN & SIGNUP"><i className="fas fa-user text-primary" /></div>
            </a>
            <a href="cart.html"> <div className="circle float-right mr-2"><i className="fas fa-shopping-cart text-primary" /><sup><span className="badge badge-danger" style={{width: '23px'}} /></sup></div>
            </a>
          </div>
        </div>
      </div>
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

export default Navbar;

