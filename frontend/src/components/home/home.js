import React from "react";
import axios from 'axios'

const home = () => {
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/home').then((res) => {
      setBrands(res.data);
      console.log(brands);
    })
  });


  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ShopNow</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
      <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      {/* font */}
      <hr />
      <div className="container" style={{ height: '30px' }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ height: '30px' }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pl-4" id="navbarNav">
            <ul className="navbar-nav">
            {brands.map((brand) => {
                <li key={brand.id}>
                  {brand.name}
                </li>
              }
              )}
              <li className="nav-item active">
                <a className="nav-link" href="#">Furnitures</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr />
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images.ctfassets.net/1nw0m35kh5t7/6kI0OuYTrVywhKOyUd1kDi/ed6186f9da8feb4464ec6f9e238e6073/Types-of-e-commerce-16-9" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://assets.entrepreneur.com/content/3x2/2000/20191127134656-e-commerce-3406613.jpeg?width=600&crop=16:9" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://media.newyorker.com/photos/5b465113da42df0b560981d3/16:9/w_1280,c_limit/180723_r32444_rd.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <br /> <br />
      <div className="container cardItem" id="products">
        <h2>Popular Products</h2>
        <br />
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <div className="ratings">
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
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
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
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
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
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
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
                </div>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container cardItem" id="newarrive">
        <h2>New Arrived</h2>
        <br />
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <div className="ratings">
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
                </div>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <div className="ratings">
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
                </div>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <div className="ratings">
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
                </div>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg" alt="Card image cap" />
              <div className="card-body">
                <p className="card-text"><a href="inner-productpage.html" className="text-dark">Just another item name</a></p>
                <div className="ratings">
                  {/* <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-warning"></i>
                          <i class="fas fa-star text-secondary"></i> */}
                  <label className="text-secondary ml-3" />
                </div>
                <p className="card-cost">$179.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="container cardItem" id="recommend">
        <div id="heading"> <h2>Recommended</h2>
          <button type="button" className="btn btn-outline-primary" id="float">See all</button> </div>
        <br />
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
      </div>
      <br />
      <br />
      <div className="container cardItem" id="brands">
        <h2>Our Brands</h2>
        <br />
        <div className="row">
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo1.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo2.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo3.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo4.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
          <div className="card">
            <img className="card-img-top img-fluid" src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/logos/logo5.png" width="20%" style={{ padding: '0 35px' }} />
            <hr />
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;