package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.OtherImagesDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.OtherImages;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.entity.Size;

import java.util.ArrayList;
import java.util.List;

public class ProductMapper {

    public static ProductDto mapToProductDto(Product product,ProductDto productDto){
        productDto.setProductId(product.getProductId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setColor(product.getColor());
        productDto.setPrice(product.getPrice());
        productDto.setQuantity(product.getQuantity());
        productDto.setPrimaryImage(product.getPrimaryImage());
        List<OtherImagesDto> otherImagesDtos = new ArrayList<>();
        for (int i=0;i<product.getOtherImages().size();i++){
            OtherImagesDto otherImagesDto = OtherImagesMapper.mapToOtherImagesDto(product.getOtherImages().get(i),new OtherImagesDto() );
            otherImagesDtos.add(otherImagesDto);
        }
        productDto.setOtherImagesDtos(otherImagesDtos);

        return productDto;
    }

    public static Product mapToProduct(ProductDto productDto,Product product){
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setColor(productDto.getColor());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        product.setPrimaryImage(productDto.getPrimaryImage());
        List<OtherImages> otherImages = new ArrayList<>();
        for (int i=0;i<productDto.getOtherImagesDtos().size();i++){
            OtherImages otherImage = OtherImagesMapper.mapToOtherImages(productDto.getOtherImagesDtos().get(i),new OtherImages());
            otherImages.add(otherImage);
        }
        product.setOtherImages(otherImages);

        return product;

    }
}
