package com.ShopNow.DAO;

import com.ShopNow.Models.orderData;
import com.ShopNow.Models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

@Repository
public class orderDao {

    @Autowired
    JdbcTemplate orderJdbc;
    @Autowired
    user userData;

    public Integer insertOrder(List<String> productIdList, String userId){
        AtomicReference<Integer> update = new AtomicReference<>(0);
        String orderId = UUID.randomUUID().toString();

        String deliveryAddress;

        //part1 insert into orders

        try{
            String addressQuery = "select * from user where userId=?";
            userData = orderJdbc.queryForObject(addressQuery, new BeanPropertyRowMapper<>(user.class), userId);

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        deliveryAddress = userData.getAddress();

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

            String finalOrderId = orderId;
            update.updateAndGet(v -> v + orderJdbc.update(orderQuery, new Object[]{finalOrderId, userId, deliveryAddress}));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }


        //part2 insert into orderinfo

        String finalOrderId1 = orderId;
        productIdList.forEach((productId)->{
            try{

                String orderQuery = "insert into orderInfo(orderId, productId) values(?,?)";

                update.updateAndGet(v -> v + orderJdbc.update(orderQuery, new Object[]{finalOrderId1, productId}));

            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        });

        //part3 empty cart
        try{
            String cartQuery = "delete from shoppingCart where userId=?";
            update.updateAndGet(v -> v + orderJdbc.update(cartQuery, userId)) ;

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        return update.get();
    }


    public List<orderData> getOrderDataByUserId(String userId) {

        try{
            String query="select orderId, orderTime , deliveryAddress from orders where userId = ?";
//            result = orderJdbc.queryForObject(query, , userId);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return null;


    }
}
