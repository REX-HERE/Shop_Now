package com.ShopNow.DAO;

import com.ShopNow.Models.product;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Repository
public class orderDao {

    @Autowired
    JdbcTemplate orderJdbc;


    public Integer insertOrder(List<product> productData, user userData){
        Integer update = 0;
        String orderId = UUID.randomUUID().toString();
        String userId = userData.getUserId();
        String deliveryAddress = userData.getAddress();

        Integer exist = 0;

        try{
            String existQuery = "SELECT COUNT(orderId) FROM orders WHERE orderId =?";
            exist = orderJdbc.queryForObject(existQuery, Integer.class, orderId);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        while(exist != 0){
            orderId = UUID.randomUUID().toString();
            String existQuery = "SELECT COUNT(orderId) FROM orders WHERE orderId =?";
            exist = orderJdbc.queryForObject(existQuery, Integer.class, orderId);
        }
        try{
            String orderQuery = "insert into orders(orderId, userId, deliveryAddress) values(?,?,?)";
            update = orderJdbc.update(orderQuery, new Object[]{orderId, userId, deliveryAddress});
        }catch (Exception e){
            System.out.println(e.getMessage());
        }






        return update;
    }
//    public Integer postOrder(String userid){
//
//        String query = "insert into orders(userid) values(?)";
//        Integer update = this.orderJdbc.update(query, new Object[]{userid});
//        return update;
//    }
//
//    public Integer postOrderinfo(String userid, List<Integer> productIds){
//        AtomicReference<Integer> totalUpdates = new AtomicReference<>(0);
//
//        productIds.forEach(
//                (productId) -> {
//                    System.out.println(productId);
//                        String query = "insert into orderinfo(userid,productid) values(?,?)";
//                        Integer update = this.orderJdbc.update(query, new Object[]{userid,productId});
//                        totalUpdates.updateAndGet(v -> v + update);
//                }
//        );
//        return totalUpdates.get();
//    }


}
