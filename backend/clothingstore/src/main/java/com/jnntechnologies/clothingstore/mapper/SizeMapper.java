package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Size;

import java.util.List;

public class SizeMapper {
    public static SizeDto mapToSizeDto(Size size, SizeDto sizeDto){
        sizeDto.setSizeId(size.getSizeId());
        sizeDto.setSizeName(size.getSizeName());
        return sizeDto;
    }

    public static Size mapToSize(SizeDto sizeDto,Size size){
        size.setSizeName(sizeDto.getSizeName());
        return size;
    }


}
