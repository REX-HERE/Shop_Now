package com.ShopNow.Controller;

import com.ShopNow.DAO.productDao;

import com.ShopNow.Models.homeData;
import com.ShopNow.Models.product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class homeController {

    @Autowired
    productDao productDao;
    @Autowired
    homeData homeData;

    @GetMapping("/")
    public homeData getHomeData(){
        try{
            homeData.setProducts(productDao.getAllProducts());
            homeData.setBrands(productDao.getAllBrands());
            homeData.setCategories(productDao.getAllCategories());
            return homeData;
//            model.addAttribute("homeData",homeData);
//            return "index";

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        return null;
    }

}
