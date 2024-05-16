package com.jnntechnologies.clothingstore.dao.impl;

import com.jnntechnologies.clothingstore.entity.Product;

public interface ProductDao {
    Product findProductById(String id);
}
