package com.ShopNow.Controller;

import com.ShopNow.DAO.userDao;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {
    @Autowired
    userDao userDao;

    @GetMapping("/user/{id}")
    user getUserById(@PathVariable String id){
        return userDao.getUser(id);
    }


}
