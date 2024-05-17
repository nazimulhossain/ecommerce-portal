package com.jnntechnologies.clothingstore.service;

import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.dto.SizesDto;
import com.jnntechnologies.clothingstore.entity.Size;

import java.util.List;

public interface ISizeService {
    void createSize(SizeDto sizeName);

    void createAllSize(SizesDto sizesDto);

    List<Size> getAllSizes();

    void deleteAllSize();
}
