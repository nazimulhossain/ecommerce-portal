package com.jnntechnologies.clothingstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.jnntechnologies.clothingstore.entity")
@EnableJpaRepositories("com.jnntechnologies.clothingstore.repository")
public class ClothingstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClothingstoreApplication.class, args);
	}

}
