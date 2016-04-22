package com.ljf.test;


import static org.junit.Assert.*;
import org.junit.BeforeClass;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.ljf.service.UserService;

public class MongoCRUDTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		ApplicationContext applicationContext=new
				ClassPathXmlApplicationContext("spring-beans.xml");
		UserService userService = (UserService)applicationContext.getBean("userService");
	}
}
