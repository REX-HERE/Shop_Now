package com.ShopNow.DAO;

import com.ShopNow.Constants.constantValues;
import com.ShopNow.Models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Repository
public class orderDao {

    @Autowired
    JdbcTemplate orderJdbc;
    @Autowired
    user userData;

    @Autowired
    orderData orderData;

    @Autowired
    orderDataSemi orderDataSemi;

    @Autowired
    productOrderData productOrderData;

    public Integer insertOrder(List<shoppingCart> cartData, String userId){
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
        cartData.forEach((cart)->{
            try{

                String orderQuery = "insert into orderInfo(orderId, productId, productQuantity) values(?,?,?)";

                update.updateAndGet(v -> v + orderJdbc.update(orderQuery, new Object[]{finalOrderId1, cart.getProductId(), cart.getProductQuantity()}));

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
        List<orderData> ans = new LinkedList<>();
        List<orderDataSemi> result = new LinkedList<>();
        try{
            String semiQuery="select orderId, orderTime , deliveryAddress from orders where userId = ?";
            result = orderJdbc.query(semiQuery, new BeanPropertyRowMapper<>(orderDataSemi.class), userId);
            if(constantValues.getDebug) {
                System.out.println(result);
            }
            result.forEach((index)->{

                if(constantValues.getDebug){
                    System.out.println(index);
                }

                String query = "select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity" +
                " from product as p, orderInfo as o where p.productId=o.productId and o.orderId=?";

                List<productOrderData> products = orderJdbc.query(query, new RowMapper<productOrderData>(){
                    public productOrderData mapRow(ResultSet rs, int rowNum) throws SQLException{
                        productOrderData productOrderData1 = new productOrderData();
                        productOrderData1.setProductId(rs.getString(1));
                        productOrderData1.setProductName(rs.getString(2));
                        productOrderData1.setPrice(rs.getInt(3));
                        productOrderData1.setProductDescription(rs.getString(4));
                        productOrderData1.setBrandName(rs.getString(5));
                        productOrderData1.setCategoryName(rs.getString(6));
                        productOrderData1.setAvailableQuantity(rs.getInt(7));
                        productOrderData1.setRatings(rs.getInt(8));
                        productOrderData1.setImageUrl(rs.getString(9));
                        productOrderData1.setVerificationStatus(rs.getString(10));
                        productOrderData1.setProductQuantity(rs.getInt(11));
                        return productOrderData1;
                    }
                },index.getOrderId().toString());

                if(constantValues.getDebug){
                    products.forEach((product)->{
                        System.out.println(product);
                    });
                }

                orderData orderDataObj = new orderData();

                orderDataObj.setOrderId(index.getOrderId());
                orderDataObj.setOrderTime(index.getOrderTime());
                orderDataObj.setOrderAddress(index.getDeliveryAddress());
                orderDataObj.setProductDataList(products);

                if(constantValues.getDebug){
                    System.out.println(orderDataObj);
                }

                ans.add(orderDataObj);
                if(constantValues.getDebug){
                    System.out.println("debugged data -- ");
                    System.out.println(ans);
                }


            });
            if(constantValues.getDebug){
                System.out.println(ans);
            }
            return ans;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }
}
