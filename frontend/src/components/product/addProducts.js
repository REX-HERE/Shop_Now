import React from 'react'

const AddProducts = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ShopNow</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" href="../ui/css/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* font */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-4 d-block mx-auto mt-2 mb-3" id="join">
                  <h4 className="pb-4">Enter Product Details</h4>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Product-Name" />
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" placeholder="Price" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Product description" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Brand" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Category" />
                    </div>
                    <div className="form-group">
                      <input type="number" className="form-control" placeholder="Quantity" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Image-url" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm"><a href className="text-light">Register</a></button>
                    {/* <a href="login.html" class="float-right text-primary">Already a Member? Login</a> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AddProducts