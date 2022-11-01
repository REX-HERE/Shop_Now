package com.ShopNow.DAO;

import com.ShopNow.Models.cartcontains;
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

    public List<cartcontains> getCartData(String userid){
        try{
            String query = "select * from cartcontains where userid=?";
            List<cartcontains> ans = cartJdbc.query(query, new BeanPropertyRowMapper<>(cartcontains.class), userid);
            return ans;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

}
