package com.ShopNow.Models;
import org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class productOrderData {
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
    Integer productQuantity;
}
