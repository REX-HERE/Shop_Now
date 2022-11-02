package com.ShopNow.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Repository
public class orderDAO {

    @Autowired
    JdbcTemplate orderJdbc;


    public Integer postOrder(String userid){

        String query = "insert into orders(userid) values(?)";
        Integer update = this.orderJdbc.update(query, new Object[]{userid});
        return update;
    }

    public Integer postOrderinfo(String userid, List<Integer> productIds){
        AtomicReference<Integer> totalUpdates = new AtomicReference<>(0);

        productIds.forEach(
                (productId) -> {
                    System.out.println(productId);
                        String query = "insert into orderinfo(userid,productid) values(?,?)";
                        Integer update = this.orderJdbc.update(query, new Object[]{userid,productId});
                        totalUpdates.updateAndGet(v -> v + update);
                }
        );
        return totalUpdates.get();
    }

}
