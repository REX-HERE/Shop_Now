package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class cartcontains {
    String userid;
    Integer price;
    Integer productid;
    Integer productquantity;
}
