package com.jnntechnologies.clothingstore.controller;


import com.jnntechnologies.clothingstore.dao.impl.ProductDao;
import com.jnntechnologies.clothingstore.dao.impl.ProductDaoImpl;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.ResponseDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.repository.ProductRepository;
import com.jnntechnologies.clothingstore.service.IProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/product",produces = {MediaType.APPLICATION_JSON_VALUE})
public class ProductController {

    private final IProductService iProductService;
    private final ProductRepository productRepository;
    private final ProductDao productDao;

    @PostMapping("/")
    public ResponseEntity<ResponseDto> createProduct(@RequestBody ProductDto productDto){
        boolean isCreated = iProductService.createProduct(productDto);
        if(isCreated){
            return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"New Product Created"));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseDto(400,"There is some error"));

    }

    @GetMapping("/{productName}")
    public ResponseEntity<ProductDto> getProductByName(@PathVariable String productName){
        ProductDto product = iProductService.getProductByName(productName);
        if(product != null ){
            return ResponseEntity.status(HttpStatus.OK)
                    .body(product);
        }

        return null;

    }

    @GetMapping("/id/{productId}")
    public Product getProductById(@PathVariable String productId){
//        int id = Integer.valueOf(productId);
        return productDao.findProductById(productId);

//        int id = Integer.valueOf(productId);
//        return productRepository.findById(id).get();
    }


    @DeleteMapping("/delete")
    public void deleteAllProduct(){
        productRepository.deleteAll();

    }

    @DeleteMapping("/{productName}")
    public void deleteByProductName(@PathVariable String productName){
        productRepository.deleteByName(productName);
    }
}
