package com.ShopNow.Controller;

import com.ShopNow.DAO.UserDAO;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserControlled {
    @Autowired
    UserDAO userDAO;
    @GetMapping("/all/users")
    List<user> fetchAll(){
        return userDAO.getAllusers("pkm");
    }
}
