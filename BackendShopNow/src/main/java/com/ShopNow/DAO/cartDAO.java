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

    public cartcontains getCartData(String userid){
        try{
            String query = "select * from cartcontains where userid=?";
            cartcontains ans = cartJdbc.queryForObject(query, new BeanPropertyRowMapper<>(cartcontains.class), userid);
            return ans;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public Integer insertUser(String userid, Integer price, String productid, Integer productquantity){
        String InsertQuery = "insert into cartcontains(userid,price,productid,productquantity) values(?,?,?,?)";
        Integer update = this.cartJdbc.update(InsertQuery,new Object[]{userid,price,productid,productquantity});
        return update;
    }

}
