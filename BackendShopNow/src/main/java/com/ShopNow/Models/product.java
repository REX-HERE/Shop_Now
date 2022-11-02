package com.ShopNow.Models;
import org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class product {
    String productId;
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
