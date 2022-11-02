package com.ShopNow.Models;

import java.sql.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class orders {
    Integer orderid;
    String userid;
    Time ordertime;
    String deliverystatus;

    public orders(Integer orderid, String userid, Time ordertime, String deliverystatus) {
        this.orderid = orderid;
        this.userid = userid;
        this.ordertime = ordertime;
        this.deliverystatus = deliverystatus;
    }
}
