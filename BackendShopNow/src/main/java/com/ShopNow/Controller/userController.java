package com.ShopNow.Controller;

import com.ShopNow.Constants.constantValues;
import com.ShopNow.DAO.userDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import com.ShopNow.Models.userTempData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class userController {
    @Autowired
    userDao userDao;

    @Autowired
    userTempData userTempData;

    @GetMapping("/user/{id}")
    user getUserById(@PathVariable String id){
        return userDao.getUser(id);
    }


    @PostMapping("/user/login")
    user login(@RequestBody userTempData data){
        if(constantValues.getDebug){
            System.out.println(data);
        }
        return userDao.login(data.getUserId(), data.getType(), data.getPassword());
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
