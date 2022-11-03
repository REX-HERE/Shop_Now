package com.ShopNow.Controller;

import com.ShopNow.DAO.orderDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class orderController {
    @Autowired
    orderDao orderDao;
    @PostMapping("/orders")
    public Integer postOrder(@RequestBody List<product> productData, user userData){
        return orderDao.insertOrder(productData, userData);
    }


}
