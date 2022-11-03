package com.ShopNow.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class orderDataSemi {
    String orderId;
    Time orderTime;
    String deliveryAddress;
}
