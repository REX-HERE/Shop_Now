package com.ShopNow.DAO;

import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


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

    public List<user> getAllUser(){
        try{
            String query = "SELECT * FROM user";
            List<user> ans = userJdbc.query(query, new BeanPropertyRowMapper<>(user.class));
            return ans;

        } catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
    public Integer insertUser(user userDetail) {

        String firstName = userDetail.getFirstName();
        String lastName  = userDetail.getLastName();
        String type = userDetail.getType();
        String password = userDetail.getPassword();
        String address = userDetail.getAddress();
        String userId = UUID.randomUUID().toString();
        Integer exist = 0;

        try {
            String existQuery = "SELECT COUNT(userId) FROM user WHERE userId =?";
            exist = userJdbc.queryForObject(existQuery, Integer.class, userId);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        while (exist != 0) {
            userId = UUID.randomUUID().toString();
            String existQuery = "SELECT COUNT(userId) FROM user WHERE userId =?";
            exist = userJdbc.queryForObject(existQuery, Integer.class, userId);
        }

        try {
            String insertQuery = "insert into user(userId,firstName,lastName,type,password,address) values(?,?,?,?,?,?)";
            String finalUserId = userId;
            Integer update = this.userJdbc.update(insertQuery, new Object[]{finalUserId, firstName,lastName,type,password,address});
            return update;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public Integer deleteUser(String userId){

        try{
            String deleteUser = "delete from user where userId=?";
            Integer update = this.userJdbc.update(deleteUser, userId) ;
            return update;
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;

    }


}
