package com.jnntechnologies.clothingstore.controller;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.ProductsDto;
import com.jnntechnologies.clothingstore.dto.ResponseDto;
import com.jnntechnologies.clothingstore.entity.Category;
import com.jnntechnologies.clothingstore.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/category",produces = {MediaType.APPLICATION_JSON_VALUE})
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class CategoryController {

    private final ICategoryService iCategoryService;

    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createCategory(@RequestBody CategoryDto categoryDto){

        iCategoryService.createCategory(categoryDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"Category created successfully"));

    }

    @PostMapping("/{id}")
    public void addProductsToCategory(@RequestBody ProductsDto productDtos, @PathVariable String id){
        System.out.println(productDtos);
        iCategoryService.addProductsToCategory(productDtos,Integer.parseInt(id));

    }

    @GetMapping("/{categoryName}")
    public CategoryDto getCategoryByName(@PathVariable String categoryName){
        return iCategoryService.getCategoryByName(categoryName);
    }
}
