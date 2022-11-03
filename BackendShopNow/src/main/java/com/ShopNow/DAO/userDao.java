package com.ShopNow.DAO;

import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class userDao {
    @Autowired
    JdbcTemplate userJdbc;


    public user getUser(String userId){
        try{
            String query = "select * from user where userId=?";
            user result = userJdbc.queryForObject(query, new BeanPropertyRowMapper<>(user.class), userId);
            return result;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }


}
