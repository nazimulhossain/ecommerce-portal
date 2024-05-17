package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.ProductsDto;
import com.jnntechnologies.clothingstore.entity.Category;
import com.jnntechnologies.clothingstore.entity.Product;
import com.jnntechnologies.clothingstore.entity.Size;
import com.jnntechnologies.clothingstore.mapper.CategoryMapper;
import com.jnntechnologies.clothingstore.mapper.ProductMapper;
import com.jnntechnologies.clothingstore.mapper.SizeMapper;
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
        categoryRepository.save(category);

    }

    @Override
    public void addProductsToCategory(ProductsDto productList, int categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        List<Product> products = new ArrayList<>();
        if(category.isPresent()){
            for (int i=0;i<productList.getProductDtos().size();i++){
                Optional<Product> product = productRepository.findById(productList.getProductDtos().get(i).getProductId());
                products.add(product.get());
            }
            category.get().setProducts(products);
            categoryRepository.save(category.get());


        }

    }

    @Override
    public CategoryDto getCategoryByName(String categoryName) {
        Optional<Category> category = categoryRepository.findByCategoryName(categoryName);
        if(category.isPresent()){
            CategoryDto categoryDto= CategoryMapper.mapToCategoryDto(category.get(),new CategoryDto());
            return categoryDto;

        }
        return null;
    }
}
