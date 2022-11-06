import React from 'react'

const orderInfo = () => {
    return (
        <div>
          <link rel="stylesheet" t h:href="@{orderInfo.css}" />
          <link rel="stylesheet" href="orderInfo.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <link rel="stylesheet" t h:href="@{css/style.css}" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />{/* fontawesom cdn link */}
          <link href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          {/* <centre> */}
          <br /> 
          <br />
          <div className="container">
            <div className="row justify-content-center">
              <h1>Order Information</h1>
            </div>
          </div>
          <br />   
          <div className="container" style={{height: '30px'}}>
            <table className="table">
              <tbody>
                <tr>
                  <td />
                  <td> Order ID: 
                    CH30564 </td>
                  {/* </tr>
        <tr> */}
                  <td> Order Time: hh:mm:ss May 5, 2020 </td>
                  {/* </tr>
        
        <tr> */}
                  <td> Delivery Address: IIT BHU </td>
                </tr>
              </tbody>
            </table>
            <div style={{textAlign: 'centre'}}>
            </div><table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Sno.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={75} height={75} /></th>
                  <td>Off-White Black Quote Wallet</td>
                  <td> Qty.1 </td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={75} height={75} /></th>
                  <td>Off-White Black Quote Wallet</td>
                  <td> Qty.1 </td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <th scope="row"><img src="https://www.thefashionisto.com/wp-content/uploads/2019/09/Off-White-Black-Quote-Yen-Wallet.jpg" alt="Black Wallet" width={75} height={75} /></th>
                  <td>Off-White Black Quote Wallet</td>
                  <td> Qty.1 </td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <td> Total </td>
                  <td> US$20,105.86 </td>
                </tr>
              </tbody>
            </table><br /><table className="footer">
              <tbody>
              </tbody></table>
          </div>   
        </div>
      );
}

export default orderInfo