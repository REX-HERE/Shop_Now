package com.ShopNow.Models;
import java.sql.*;
import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class orderData {
    String orderId;
    String orderAddress;
    Time OrderTime;
    List<Integer> productIdList;


}