package com.jnntechnologies.clothingstore.service;

import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.entity.Size;

import java.util.List;

public interface IProductService {
    boolean createProduct(ProductDto productDto);

    ProductDto getProductById(int productId);

    void updateProduct(int id,ProductDto productDto);

    void removeAllProducts();

    void deleteProductById(int id);
}
