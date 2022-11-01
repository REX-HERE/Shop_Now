package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class product {
    String productid;
    String pname;
    int price;
    int availablequantity;
    int ratings;
    String imageURl;
    int deleverytime;
    String verificationstatus;

}
