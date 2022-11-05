package com.ShopNow.Controller;

import com.ShopNow.DAO.productDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.productData;
import com.ShopNow.Models.shoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.*;

@RestController
public class productController {
    @Autowired
    productDao productDao;

    @GetMapping("/products")
    List<product> getAllProducts(){
        return productDao.getAllProducts();
    }

    @GetMapping("/products/{id}")
    product getProductById(@PathVariable String id){
        return productDao.getProductById(id);
    }

    @PostMapping("/seller")
    public Integer PostCart(@RequestBody product productInfo){
        return productDao.insertProduct(productInfo);
    }

    @DeleteMapping("/seller/{productId}")
    public Integer deleteItem(@PathVariable String productId){
        return productDao.deleteUser(productId);
    }

    @GetMapping("/soldBy/{userId}")
    List<productData> getProductDataByUserId(@PathVariable String userId){
        return productDao.getProductDataByUserId(userId);
    }
}
