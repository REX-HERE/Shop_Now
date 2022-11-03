package com.ShopNow.DAO;

import com.ShopNow.Models.shoppingCart;
import com.ShopNow.Models.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class cartDAO {

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
        String InsertQuery = "insert into shoppingCart(userId,productId,productQuantity) values(?,?,?,?)";
        Integer update = this.cartJdbc.update(InsertQuery,new Object[]{userId,productId,productQuantity});
        return update;
    }

}
