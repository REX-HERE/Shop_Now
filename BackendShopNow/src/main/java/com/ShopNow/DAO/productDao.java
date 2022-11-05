package com.ShopNow.DAO;

import com.ShopNow.Constants.constantValues;
import com.ShopNow.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

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

    public product getProductById(String id){
        try {
            String query = "Select * from product where productId=?";

            product result = productJdbc.queryForObject(query, new BeanPropertyRowMapper<>(product.class), id);
            return result;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public Integer insertProduct(product productInfo) {

        String productName = productInfo.getProductName();
        Integer price = productInfo.getPrice();
        String productDescription = productInfo.getProductDescription();
        String brandName = productInfo.getBrandName();
        String categoryName = productInfo.getCategoryName();
        Integer availableQuantity = productInfo.getAvailableQuantity();
        Integer ratings = productInfo.getRatings();
        String imageUrl = productInfo.getImageUrl();
        String verificationStatus = productInfo.getVerificationStatus();

        String productId = UUID.randomUUID().toString();
        Integer exist = 0;

        try {
            String existQuery = "SELECT COUNT(productId) FROM product WHERE productId =?";
            exist = productJdbc.queryForObject(existQuery, Integer.class, productId);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        while (exist != 0) {
            productId = UUID.randomUUID().toString();
            String existQuery = "SELECT COUNT(productId) FROM product WHERE productId =?";
            exist = productJdbc.queryForObject(existQuery, Integer.class, productId);
        }

        try {
            String insertQuery = "insert into product(productId,productName,price,productDescription,brandName,categoryName,availableQuantity,ratings,imageUrl,verificationStatus) values(?,?,?,?,?,?,?,?,?,?)";
            String finalProductId = productId;
            Integer update = this.productJdbc.update(insertQuery, new Object[]{finalProductId, productName, price, productDescription, brandName, categoryName, availableQuantity, ratings, imageUrl, verificationStatus});
            return update;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public Integer deleteProduct(String productId){

        try{
            String deleteProduct = "delete from product where productId=?";
            Integer update = this.productJdbc.update(deleteProduct, productId) ;
            return update;
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;

    }

    public List<productData> getProductDataByUserId(String userId) {
        List<productData> ans = new LinkedList<>();
        try {
            String queryData = "select s.productId, s.discount ,p.productName, p.price, p.productDescription,p.brandName, p.categoryName, p.availableQuantity ,p.ratings, p.imageUrl, p.verificationStatus from soldBy as s,product as p where s.userId = ? and s.productId = p.productId";
            ans = productJdbc.query(queryData, new BeanPropertyRowMapper<>(productData.class), userId);
            return ans;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

}
