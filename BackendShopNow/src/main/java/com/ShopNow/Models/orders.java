package com.ShopNow.Models;

import java.sql.Time;

import org.springframework.format.annotation.DateTimeFormat;

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
}
