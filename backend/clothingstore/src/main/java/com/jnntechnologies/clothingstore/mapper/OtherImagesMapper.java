package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.OtherImagesDto;
import com.jnntechnologies.clothingstore.entity.OtherImages;

public class OtherImagesMapper {
    public static OtherImagesDto mapToOtherImagesDto(OtherImages otherImages,OtherImagesDto otherImagesDto){
        otherImagesDto.setOtherimagesId(otherImages.getOtherimagesId());
        otherImagesDto.setName(otherImages.getName());
        return otherImagesDto;
    }

    public static OtherImages mapToOtherImages(OtherImagesDto otherImagesDto,OtherImages otherImages){
        otherImages.setName(otherImagesDto.getName());
        return otherImages;
    }


}
