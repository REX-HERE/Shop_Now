package com.ShopNow.DAO;

import com.ShopNow.Constants.constantValues;
import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.*;

@Repository
public class productDao {

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

    public List<String> getAllBrands(){
        try{
            String query = "select Distinct brandName from product";
            List<String> result = productJdbc.queryForList(query, String.class);
            if(constantValues.getDebug){
                result.forEach((i)->{
                    System.out.println(i);
                });
            }

            return result;

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public List<String> getAllCategories(){
        try{
            String query = "select Distinct categoryName from product";
            List<String> result = productJdbc.queryForList(query, String.class);
            if(constantValues.getDebug){
                result.forEach((i)->{
                    System.out.println(i);
                });
            }


            return result;

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public product getProductById(Integer id){
        try {
            String query = "Select * from product where productId=?";

            product result = productJdbc.queryForObject(query, new BeanPropertyRowMapper<>(product.class), id);
            return result;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

}