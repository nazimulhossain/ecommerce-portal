package com.jnntechnologies.clothingstore.service;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.ProductsDto;
import com.jnntechnologies.clothingstore.entity.Category;

import java.util.List;

public interface ICategoryService {

    void createCategory(CategoryDto category);

    void addProductsToCategory(ProductsDto productDtos, int categoryId);

    CategoryDto getCategoryById(int id);

    void deleteCategory(int id);

    List<ProductDto> getProductsByCategory(int id);
    List<ProductDto> getProductsByCategory(String categoryName);
}
