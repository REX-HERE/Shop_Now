package com.ShopNow.Controller;

import com.ShopNow.DAO.cartDao;
import com.ShopNow.Models.shoppingCart;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class cartController {
    @Autowired
    cartDao cartDao;

    @GetMapping("/cart/{userid}")
    public List<shoppingCart> getCartByUserId(@PathVariable String userid){
        return cartDao.getCartData(userid);
    }


    @PostMapping("/cart")
    public Integer PostCart(@RequestBody shoppingCart cartData){
        return cartDao.insertUser(cartData.getUserId(), cartData.getProductId(), cartData.getProductQuantity());
    }
    @DeleteMapping("/cart")
    public Integer deleteItem(@RequestBody shoppingCart cartData){
        return cartDao.deleteUser(cartData);
    }





}
