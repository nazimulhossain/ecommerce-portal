package com.jnntechnologies.clothingstore.dto;

import lombok.Data;

import java.util.List;

@Data
public class CategoryDto {
    private int id;

    private String categoryName;

    private String categoryDescription;

    private List<ProductDto> productDto;


}
