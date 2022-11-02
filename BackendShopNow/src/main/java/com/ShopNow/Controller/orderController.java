package com.ShopNow.Controller;

import com.ShopNow.DAO.orderDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class orderController {

    @Autowired
    orderDAO orderDao;

//    @PostMapping("/order")


}
