package com.ShopNow.Controller;

import com.ShopNow.DAO.userDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class userController {
    @Autowired
    userDao userDao;


    @GetMapping("/user/{id}")
    user getUserById(@PathVariable String id){
        return userDao.getUser(id);
    }


    @GetMapping("/user/login")
    user login(@RequestBody String userId, @RequestBody String userType, @RequestBody String userPassword){
        return userDao.login(userId, userType, userPassword);
    }



    @GetMapping("/allUsers")
    List<user> getAllUser(){
        return userDao.getAllUser();
    }

    @PostMapping("/user/signUp")
    public Integer postUser(@RequestBody user userDetail){
        return userDao.insertUser(userDetail);
    }

    @DeleteMapping("/user/delete/{userId}")
    public Integer deleteItem(@PathVariable String userId){
        return userDao.deleteUser(userId);
    }
}
