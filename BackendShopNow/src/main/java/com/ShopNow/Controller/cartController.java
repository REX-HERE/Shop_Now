package com.ShopNow.Controller;

import com.ShopNow.DAO.cartDAO;
import com.ShopNow.Models.cartcontains;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class cartController {
    @Autowired
    cartDAO cartDao;

    @GetMapping("/cart/{userid}")
    List<cartcontains> getCartByUserId(@PathVariable String userid){
        return cartDao.getCartData(userid);
    }


    @PostMapping("/cart")
    String PostCart(@RequestBody cartcontains CartData){
        System.out.println(CartData);
        return "OK";
    }

}
