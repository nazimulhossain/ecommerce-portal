package com.jnntechnologies.clothingstore.repository;

import com.jnntechnologies.clothingstore.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    Optional<Product> findByName(String name);

    void deleteByName(String productName);
}