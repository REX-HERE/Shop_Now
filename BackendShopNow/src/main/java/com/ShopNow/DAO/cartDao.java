package com.ShopNow.DAO;

import com.ShopNow.Models.shoppingCart;
import com.ShopNow.Models.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class cartDao {

    @Autowired
    JdbcTemplate cartJdbc;

    public List<shoppingCart> getCartData(String userId){
        try{
            String query = "select * from shoppingCart where userId=?";
            List<shoppingCart> ans = cartJdbc.query(query, new BeanPropertyRowMapper<>(shoppingCart.class), userId);
            return ans;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public Integer insertUser(String userId, String productId, Integer productQuantity){
        String existQuery = "SELECT COUNT(productId) FROM shoppingCart WHERE productId =?";
        Integer exist = this.cartJdbc.queryForObject(existQuery, Integer.class, productId);

//        Pending task here // Update query to be written and product info to be set as new product quantity
        if(exist==1){
            String insertQuery = "";
            Integer update = this.cartJdbc.update(insertQuery,new Object[]{userId,productId,productQuantity});
            return update;
        }
        else{
            String insertQuery = "insert into shoppingCart(userId,productId,productQuantity) values(?,?,?)";
            Integer update = this.cartJdbc.update(insertQuery,new Object[]{userId,productId,productQuantity});
            return update;
        }


    }

}