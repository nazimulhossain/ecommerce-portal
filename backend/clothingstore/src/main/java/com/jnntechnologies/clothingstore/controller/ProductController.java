package com.jnntechnologies.clothingstore.controller;

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


    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createProduct(@RequestBody ProductDto productDto){
        boolean isCreated = iProductService.createProduct(productDto);
        if(isCreated){
            return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"New Product Created"));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseDto(400,"There is some error"));

    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductDto> getProductByid(@PathVariable String productId){
        ProductDto product = iProductService.getProductById(Integer.parseInt(productId));
        if(product != null ){
            return ResponseEntity.status(HttpStatus.OK)
                    .body(product);
        }

        return null;

    }


    @DeleteMapping("/delete")
    public void deleteAllProduct(){
        productRepository.deleteAll();

    }

    @DeleteMapping("/{productId}")
    public void deleteByProductName(@PathVariable String productId){
        productRepository.deleteById(Integer.parseInt(productId));
    }
}
