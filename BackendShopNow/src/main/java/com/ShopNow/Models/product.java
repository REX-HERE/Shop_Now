package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class product {
    Integer productid;
    String pname;
    Integer price;
    Integer availablequantity;
    Integer ratings;
    String imageURl;
    String verificationstatus;
}
