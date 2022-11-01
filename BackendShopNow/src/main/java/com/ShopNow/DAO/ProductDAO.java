package com.ShopNow.DAO;

import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAO {

    @Autowired
    JdbcTemplate productJdbc;

    public List<product> getAllProducts(){
        try{
            String query = "SELECT * FROM product";
            List<product> ans = productJdbc.query(query, new BeanPropertyRowMapper<>(product.class));
            return ans;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

}
