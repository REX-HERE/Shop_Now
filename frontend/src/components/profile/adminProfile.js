import React from 'react'

const AdminProfile = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ShopNow</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      {/* <link rel="stylesheet" href="css/style.css"> */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
      {/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      {/* font */}
      <br />
      <div className="container">
        <h2>My Account</h2>
        <br /><br />
        <div className="row rounded">
          <div className="col-3 mb-4 mt-3 pt-4 pb-3 bg-light w-auto h-fit-content">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-user" /> &nbsp; View Users</a>
              <br />
              <a className="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> &nbsp; View
                Products</a>
              <br />
              <a className="nav-link active" id="v-pills-profile-tab" selected data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-user" /> &nbsp; Log
                Out</a>
              {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
            </div>
          </div>
          <div className="col-9 mt-3">
            <div className="tab-content bg-light pb-5" id="v-pills-tabContent">
              <div className="tab-pane fade show active p-3" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <img id="profilePic" src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" className="rounded-circle img-fluid" />
                &nbsp; &nbsp; <h5 className="d-inline-block">Neelesh D &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                <br />
                <br />
                <hr />
                <br />
                <form>
                  <div className="row pb-5">
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">First Name</p>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Last Name</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Type</p>
                      <div>
                        <select className="form-control form-control">
                          <option disabled>Select Role:</option>
                          <option>Buyer</option>
                          <option>Seller</option>
                          <option>Admin</option>
                        </select>
                      </div>
                      {/* <input type="text" class="form-control" placeholder="Type"> */}
                    </div>
                    <div className="col">
                      <p className="font-weight-bold d-inline-block">Address</p>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Type here" />
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
                <div className="delAccount pt-3">
                  <h5 className="text-dark">Delete Account</h5>
                  <a href className="text-muted float-right font-weight-bold">Delete Your Account</a>
                  <p className="text-muted">By deleting your account, you will lose all your data.</p>
                </div>
                <hr className="mt-4" /><br /><br />
                <button type="button" className="btn btn-outline-primary float-right mt-3 mb-5" data-toggle="modal" data-target=".bd-example-modal-md">Save Changes</button>
                <br />
              </div>
              {/* <div class="tab-pane fade p-3" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{display: 'flex'}}>
        <div style={{paddingLeft: '31%'}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
        </div>
        <div style={{paddingLeft: '14.5%'}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
        </div>
        <div style={{paddingLeft: '14.5%'}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {/* <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-info"></i> &nbsp; Basic Details</a> */}
        </div>
      </div>
      <br /><br />
      <div className="modal fade bd-example-modal-md" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edited Successfully</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Details were edited successfully.</p>
            </div>
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
                  <small id="emailHelp" className="form-text text-danger">We'll never share your email with anyone
                    else!</small>
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

export default AdminProfile