import React from 'react'

const AllProducts = () => {

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
          <hr />
          <div className="container" style={{height: '30px'}}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{height: '30px'}}>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse pl-4" id="navbarNav">
                <ul className="navbar-nav">
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> <span> ≡ All Category</span></a>
                      <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Foods and Drink</a>
                          <a class="dropdown-item" href="#">Home interior</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Category 1</a>
                          <a class="dropdown-item" href="#">Category 2</a>
                          <a class="dropdown-item" href="#">Category 3</a>
                      </div>
                  </li> */}
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Fashion <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#"> Supermarket </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Electronics</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Baby &amp; Toys</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Fitness sport </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Clothing</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Furnitures</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <hr />
          <br /> <br />
          <div className="container cardItem" id="products">
            {/* <h2>Brand Name</h2> */}
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Some item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$280.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Great item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$56.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container cardItem" id="products">
            {/* <h2>Brand Name</h2> */}
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Some item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$280.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Great item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$56.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container cardItem" id="products">
            {/* <h2>Brand Name</h2> */}
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Some item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$280.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Great item name here</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$56.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/4.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                    <div className="ratings">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                    <p className="card-cost">$179.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* <div class="container cardItem" id="recommend">
      <div id="heading"> <h2>Related</h2>
          <button type="button" class="btn btn-outline-primary" id="float">More!</button> </div>
      <br> */}
        </div>
      );
    
}

export default AllProducts