package com.jnntechnologies.clothingstore.dto;

import com.jnntechnologies.clothingstore.entity.Size;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {
    private int productId;
    private String name;
    private String description;
    private double price;
    private String color;
    private int quantity;
//    private double totalPrice;
    private String primaryImage;
    private List<SizeDto> sizeName;
    private List<OtherImagesDto> otherImagesDtos;


}
