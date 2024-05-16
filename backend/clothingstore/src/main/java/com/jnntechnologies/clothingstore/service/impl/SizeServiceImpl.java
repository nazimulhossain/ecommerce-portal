package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Size;
import com.jnntechnologies.clothingstore.mapper.SizeMapper;
import com.jnntechnologies.clothingstore.repository.ProductRepository;
import com.jnntechnologies.clothingstore.repository.SizeRepository;
import com.jnntechnologies.clothingstore.service.ISizeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class SizeServiceImpl implements ISizeService {

    private final SizeRepository sizeRepository;
    private final ProductRepository productRepository;
    @Override
    public void createSize(SizeDto sizeName) {
        Size newSize = SizeMapper.mapToSize(sizeName,new Size());
        sizeRepository.save(newSize);



    }

//    @Override
//    public void createAllSize(SizeDtos sizeDtos) {
//        List<Size> sizes = new ArrayList<>();
//
//        for(String sizeName : sizeDtos.getSizeName()){
//            sizes.add(new Size(sizeName));
//        }
//
//        sizeRepository.saveAll(sizes);
//
//
//    }

    @Override
    public List<Size> getAllSizes() {
        return sizeRepository.findAll();

    }
}
