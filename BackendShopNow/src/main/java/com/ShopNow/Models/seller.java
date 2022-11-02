package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class seller {
    String sellerid;
    String firstname;
    String lastname;
    String password;
    String status;
    String deliveryaddress;
}
