package com.ShopNow.Controller;

import com.ShopNow.DAO.cartDAO;
import com.ShopNow.Models.cartcontains;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class cartController {
    @Autowired
    cartDAO cartDao;

    @GetMapping("/cart/{userid}")
    List<cartcontains> getCartByUserId(@PathVariable String userid){
        return cartDao.getCartData(userid);
    }


}
