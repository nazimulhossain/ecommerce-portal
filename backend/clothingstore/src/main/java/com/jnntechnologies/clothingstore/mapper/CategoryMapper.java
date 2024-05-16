package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.entity.Category;
import com.jnntechnologies.clothingstore.entity.Product;

import java.util.ArrayList;
import java.util.List;

public class CategoryMapper {

    public static Category maptoCategory(CategoryDto categoryDto,Category category){
        category.setCategoryName(categoryDto.getCategoryName());
        category.setCategoryDescription(categoryDto.getCategoryDescription());
        return category;

    }

    public static CategoryDto mapToCategoryDto(Category category,CategoryDto categoryDto){
        categoryDto.setId(category.getId());
        categoryDto.setCategoryName(category.getCategoryName());
        categoryDto.setCategoryDescription(category.getCategoryDescription());

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product : category.getProducts()){
            productDtos.add(ProductMapper.mapToProductDto(product,new ProductDto()));
        }
        categoryDto.setProductDto(productDtos);

        return categoryDto;

    }
}
