package com.ShopNow.DAO;

import com.ShopNow.Constants.constantValues;
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
        Integer exist=0;
        try{
            String existQuery = "SELECT COUNT(productId) FROM shoppingCart WHERE productId =?";
            exist = this.cartJdbc.queryForObject(existQuery, Integer.class, productId);

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

//        Pending task here // Update query to be written and product info to be set as new product quantity
        if(exist==1){
            String quantityQuery = "select productQuantity from shoppingCart where productId=?";
            Integer quantity = this.cartJdbc.queryForObject(quantityQuery, Integer.class, productId);
            Integer totalQuantity = quantity+productQuantity;
            if(constantValues.getDebug){
                System.out.println(totalQuantity);
            }
            String updateQuery = "update shoppingCart set productQuantity=? where productId=?";
            Integer update = this.cartJdbc.update(updateQuery, new Object[]{totalQuantity, productId});
            return update;
        }
        else{
            try{
                String insertQuery = "insert into shoppingCart(userId,productId,productQuantity) values(?,?,?)";
                Integer update = this.cartJdbc.update(insertQuery,new Object[]{userId,productId,productQuantity});
                if(constantValues.getDebug){
                    System.out.println("inserted");
                }
                return update;

            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
        return null;


    }

}
