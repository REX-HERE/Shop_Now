package com.ShopNow.Controller;

import com.ShopNow.DAO.productDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homeController {

    @Autowired
    productDao productDao;

}
