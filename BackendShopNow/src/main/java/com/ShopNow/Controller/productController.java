package com.ShopNow.Controller;

import com.ShopNow.DAO.ProductDAO;
import com.ShopNow.Models.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.*;

@RestController
public class productController {
    @Autowired
    ProductDAO productDao;

    @GetMapping("/")
    List<product> getAllProducts(){
        return productDao.getAllProducts();
    }

    @GetMapping("/products/{id}")
    product getProductById(@PathVariable Integer id){
        return productDao.getProductById(id);
    }

}
