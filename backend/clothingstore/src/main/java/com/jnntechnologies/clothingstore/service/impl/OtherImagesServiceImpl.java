package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.OtherImagesDto;
import com.jnntechnologies.clothingstore.entity.OtherImages;
import com.jnntechnologies.clothingstore.mapper.OtherImagesMapper;
import com.jnntechnologies.clothingstore.repository.OtherImagesRepository;
import com.jnntechnologies.clothingstore.service.IOtherImagesService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OtherImagesServiceImpl implements IOtherImagesService {

    private final OtherImagesRepository otherImagesRepository;
    @Override
    public void createOtherImage(OtherImagesDto otherImagesDto) {
        OtherImages newImage = OtherImagesMapper.mapToOtherImages(otherImagesDto,new OtherImages());
        otherImagesRepository.save(newImage);

    }
}
