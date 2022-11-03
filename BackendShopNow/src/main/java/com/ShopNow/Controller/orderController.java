package com.ShopNow.Controller;

import com.ShopNow.DAO.orderDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.shoppingCart;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class orderController {
    @Autowired
    orderDao orderDao;

    @PostMapping("/order")
    public Integer postOrder(@RequestBody List<shoppingCart> cartData){
        if(cartData.isEmpty()){
            System.out.println("cart empty");
            return 0;
        }
        String userId = "";
        List<String> productIdList = new ArrayList<>();
        userId = cartData.get(0).getUserId();


        cartData.forEach((tuple)->{
            productIdList.add(tuple.getProductId());
        });
        return orderDao.insertOrder(productIdList, userId);
    }


}
