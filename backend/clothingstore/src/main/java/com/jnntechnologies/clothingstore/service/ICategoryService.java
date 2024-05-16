package com.jnntechnologies.clothingstore.service;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.entity.Category;

public interface ICategoryService {

    void createCategory(CategoryDto category);

    CategoryDto getCategoryByName(String categoryName);
}
