package com.jnntechnologies.clothingstore.dao.impl;

import com.jnntechnologies.clothingstore.entity.Product;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDaoImpl implements ProductDao {

    @Autowired
    private final EntityManager entityManager;

    public ProductDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public Product findProductById(String id) {
        Product product = entityManager.find(Product.class,id);
        return product;
    }
}
