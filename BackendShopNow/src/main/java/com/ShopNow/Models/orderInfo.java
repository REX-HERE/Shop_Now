package com.ShopNow.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class orderInfo {
    String orderId;
    String productId;
    Integer productQuantity;
}
