package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.entity.Size;
import com.jnntechnologies.clothingstore.mapper.ProductMapper;
import com.jnntechnologies.clothingstore.mapper.SizeMapper;
import com.jnntechnologies.clothingstore.repository.ProductRepository;
import com.jnntechnologies.clothingstore.repository.SizeRepository;
import com.jnntechnologies.clothingstore.service.IProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;
    private final SizeRepository sizeRepository;


    @Override
    @Transactional
    public boolean createProduct(ProductDto productDto) {
        boolean isCreated = false;
        List<SizeDto> sizesDtos = productDto.getSizeName();
        List<Size> fromDataBase = sizeRepository.findAll();
        Product newProduct = ProductMapper.mapToProduct(productDto,new Product());
        for(int i=0;i<sizesDtos.size();i++){
            for(int j=0;j<fromDataBase.size();j++){
                if(Objects.equals(sizesDtos.get(i).getSizeName(), fromDataBase.get(j).getSizeName())){
                    newProduct.addSize(fromDataBase.get(j));
                }


            }

        }

        Product product = productRepository.save(newProduct);
        if(product!=null){
            isCreated = true;
        }
        return isCreated;

    }

    @Override
    public ProductDto getProductById(int productId) {
        Optional<Product> product = productRepository.findById(productId);
        if(product.isPresent()){
            ProductDto productDto = ProductMapper.mapToProductDto(product.get(),new ProductDto());
            List<SizeDto> sizeDtos = new ArrayList<>();
            for(int i=0;i<product.get().getSize().size();i++){
                SizeDto sizeDto = SizeMapper.mapToSizeDto(product.get().getSize().get(i),new SizeDto() );
                sizeDtos.add(sizeDto);

            }

            productDto.setSizeName(sizeDtos);
            return productDto;

        }
        return null;
    }

    @Override
    public void updateProduct(int id, ProductDto productDto) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            Product updatedProduct = ProductMapper.mapToProduct(productDto,product.get());
            productRepository.save(updatedProduct);

        }

    }


    @Override
    public void removeAllProducts() {
        productRepository.deleteAll();
    }

    @Override
    public void deleteProductById(int id) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            productRepository.delete(product.get());
        }
    }
}
