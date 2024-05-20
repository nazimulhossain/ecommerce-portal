package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.CategoryDto;
import com.jnntechnologies.clothingstore.dto.ProductDto;
import com.jnntechnologies.clothingstore.dto.ProductsDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
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
    public CategoryDto getCategoryById(int id) {
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            CategoryDto categoryDto= CategoryMapper.mapToCategoryDto(category.get(),new CategoryDto());
            return categoryDto;

        }
        return null;
    }

    @Override
    public void deleteCategory(int id) {
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            categoryRepository.delete(category.get());
        }

    }

    @Override
    public List<ProductDto> getProductsByCategory(int id) {
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            List<Product> products = category.get().getProducts();
            List<ProductDto> productDtos = new ArrayList<>();
            for (int i=0;i<products.size();i++){
                ProductDto productDto = ProductMapper.mapToProductDto(products.get(i),new ProductDto());
                List<SizeDto> sizeDtos = new ArrayList<>();
                for (int j=0;j<products.get(i).getSize().size();j++){
                    SizeDto sizeDto = SizeMapper.mapToSizeDto(products.get(i).getSize().get(j),new SizeDto() );
                    sizeDtos.add(sizeDto);
                }
                productDto.setSizeName(sizeDtos);
                productDtos.add(productDto);
            }
            return productDtos;
        }
        return null;
    }
}
