import React from 'react'

const SignUp = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ShopNow</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" th:href="@{css/style.css}" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* font */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4 d-block mx-auto mt-2 mb-3" id="join">
                  <h4 className="pb-4">Create An Account</h4>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First-Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last-Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Address" />
                    </div>
                    <select className="form-control form-control">
                      <option disabled>Select Role:</option>
                      <option>Buyer</option>
                      <option>Seller</option>
                      <option>Admin</option>
                    </select>
                    <br />
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary btn-sm"><a href className="text-light">Register</a></button>
                    <a href="login.html" className="float-right text-primary">Already a Member? Login</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default SignUp