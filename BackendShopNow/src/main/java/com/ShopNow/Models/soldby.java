package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class soldby {
    String sellerid;
    Integer productid;
    String availability;
    Integer discount;
}
