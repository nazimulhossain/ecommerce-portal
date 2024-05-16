package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.entity.Size;

import java.util.ArrayList;
import java.util.List;

public class ProductMapper {

    public static ProductDto mapToProductDto(Product product,ProductDto productDto){
        productDto.setProductId(productDto.getProductId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setColor(product.getColor());
        productDto.setPrice(product.getPrice());
        productDto.setQuantity(product.getQuantity());
        productDto.setPrimaryImage(product.getPrimaryImage());
        productDto.setSelectedSize(product.getSelectedSize());
        productDto.setTotalPrice(product.getTotalPrice());
        List<SizeDto> sizes = new ArrayList<>();
        for(Size size : product.getSize()){
            sizes.add(SizeMapper.mapToSizeDto(size,new SizeDto()));
        }
        productDto.setSizeName(sizes);
        return productDto;
    }

    public static Product mapToProduct(ProductDto productDto,Product product){
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setColor(productDto.getColor());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        product.setPrimaryImage(productDto.getPrimaryImage());
        product.setSelectedSize(productDto.getSelectedSize());
        product.setTotalPrice(productDto.getTotalPrice());
        List<Size> sizes = new ArrayList<>();
        for(SizeDto sizeDto : productDto.getSizeName()){
            sizes.add(SizeMapper.mapToSize(sizeDto,new Size()));
        }
        product.setSize(sizes);
        return product;

    }
}
