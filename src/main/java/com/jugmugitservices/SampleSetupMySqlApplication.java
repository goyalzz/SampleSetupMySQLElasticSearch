package com.jugmugitservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

// Reference URL: https://dzone.com/articles/spring-boot-hibernate-multitenancy-implementation
// http://blog.netgloo.com/2014/10/27/using-mysql-in-spring-boot-via-spring-data-jpa-and-hibernate/

@EnableAutoConfiguration
@SpringBootApplication
@EnableScheduling
@EnableAsync
public class SampleSetupMySqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleSetupMySqlApplication.class, args);
	}
}
