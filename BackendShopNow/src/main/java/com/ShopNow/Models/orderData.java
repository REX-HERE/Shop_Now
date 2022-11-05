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
    private String orderId;
    private String orderAddress;
    private Time OrderTime;
    private List<String> productIdList;


}