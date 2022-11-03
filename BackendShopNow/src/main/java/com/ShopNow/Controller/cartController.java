package com.ShopNow.Controller;

import com.ShopNow.DAO.cartDAO;
import com.ShopNow.Models.shoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class cartController {
    @Autowired
    cartDAO cartDao;

    @GetMapping("/cart/{userid}")
    public List<shoppingCart> getCartByUserId(@PathVariable String userid){
        return cartDao.getCartData(userid);
    }


    @PostMapping("/cart")
    public Integer PostCart(@RequestBody shoppingCart CartData){
        return cartDao.insertUser(CartData.getUserId(), CartData.getProductId(), CartData.getProductQuantity());
    }

}
