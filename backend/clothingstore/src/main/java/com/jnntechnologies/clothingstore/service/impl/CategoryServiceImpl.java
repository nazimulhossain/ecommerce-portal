package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.entity.Category;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.mapper.CategoryMapper;
import com.jnntechnologies.clothingstore.mapper.ProductMapper;
import com.jnntechnologies.clothingstore.repository.CategoryRepository;
import com.jnntechnologies.clothingstore.repository.ProductRepository;
import com.jnntechnologies.clothingstore.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements ICategoryService {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    @Override
    public void createCategory(CategoryDto categoryDto) {
        Category category = CategoryMapper.maptoCategory(categoryDto, new Category());
        List<Product> products = new ArrayList<>();
        List<Product> productsFromDatabase = productRepository.findAll();
        if(categoryDto.getProductDto()!=null){
            for(ProductDto productDto : categoryDto.getProductDto()){
                products.add(ProductMapper.mapToProduct(productDto,new Product()));
            }
        }

        for(int i=0;i<products.size();i++){

            for(int j=0;j<productsFromDatabase.size();j++){
                if(Objects.equals(products.get(i).getName(), productsFromDatabase.get(j).getName())){
                    category.addProducts(productsFromDatabase.get(j));
                }

            }
        }

      categoryRepository.save(category);



    }

    @Override
    public CategoryDto getCategoryByName(String categoryName) {
        Optional<Category> category = categoryRepository.findByCategoryName(categoryName);
        if(category.isPresent()){
//            return category.get();
            CategoryDto categoryDto= CategoryMapper.mapToCategoryDto(category.get(),new CategoryDto());
            return categoryDto;

        }
        return null;
    }
}
