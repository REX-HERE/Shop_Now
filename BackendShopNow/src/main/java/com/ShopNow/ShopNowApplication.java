package com.ShopNow;

import com.ShopNow.DAO.cartDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@SpringBootApplication
public class ShopNowApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopNowApplication.class, args);
	}
}
