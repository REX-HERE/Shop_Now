package com.ShopNow.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class shoppingCart {
    String userId;
    String productId;
    Integer productQuantity;
}
