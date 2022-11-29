import React from 'react'

const ProductDeatils = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Product Details</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* font */} 
          <div className="container mt-5 mb-5" id="productPage">
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <img src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" className="figure-img img-fluid rounded" />
                </div>
              </div>
              <div className="col-md-7">
                <h5>Adidas Cool T-Shirt</h5>
                <p className="text-muted">T-SHIRTS</p>
                <h5 className="pt-4">$179.00</h5>
                <h5 className="pt-4">Product Description</h5>
                <p className="description text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <hr />
                <table className="table mt-2">
                  <tbody>
                    <tr>
                      <th scope="row">Product name</th>
                      <td>T-SHIRT IE-106</td>
                    </tr>
                    <tr>
                      <th scope="row">Category</th>
                      <td>Clothing</td>
                    </tr>
                    <tr>
                      <th scope="row">Rating</th>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div className="row">
                  <div className="col-md-7">
                    <div className="input-group">
                      <div className="input-group-prepend" onclick="add1()">
                        <span className="input-group-text"><i className="fas fa-plus" /></span>
                      </div>
                      <input type="text" className="numberbox1 form-control" defaultValue={0} />
                      <div className="input-group-append" onclick="subtract1()">
                        <span className="input-group-text"><i className="fas fa-minus" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="purchase-btn">
                  <button type="button" className="btn btn-sm btn-light"><a className="text-black" href> <i className="fas fa-shopping-cart pr-2" />  Add to Cart </a> </button>
                </div>
              </div>  
            </div>
          </div>
          <br /><br />
          <hr />
          <br />
          <h4 className="text-center text-muted">Browse products</h4>
          <br /><br />
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                  <p className="card-cost">$179.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text"><a href="inner-productpage.html" className="text-dark">Some item name here</a></p>
                  <p className="card-cost">$280.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text"><a href="inner-productpage.html" className="text-dark">Great item name here</a></p>
                  <p className="card-cost">$56.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                  <p className="card-cost">$179.00</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <footer>
          </footer></div>
      );
}

export default ProductDeatils