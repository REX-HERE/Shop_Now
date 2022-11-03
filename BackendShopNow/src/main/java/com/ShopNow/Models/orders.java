package com.ShopNow.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class orders {
    String orderId;
    String userId;
    Time orderTime;
    String deliveryAddress;
}
