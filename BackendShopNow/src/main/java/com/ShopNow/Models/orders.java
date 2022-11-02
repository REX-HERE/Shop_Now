package com.ShopNow.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class orders {
    String orderId;
    String userId;
    
    String deliveryAddress;
}
