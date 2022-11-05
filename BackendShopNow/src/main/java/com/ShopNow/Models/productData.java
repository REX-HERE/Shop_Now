package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class productData {
    String productId;
    Integer discount;
    String productName;
    Integer price;
    String productDescription;
    String brandName;
    String categoryName;
    Integer availableQuantity;
    Integer ratings;
    String imageUrl;
    String verificationStatus;
}
