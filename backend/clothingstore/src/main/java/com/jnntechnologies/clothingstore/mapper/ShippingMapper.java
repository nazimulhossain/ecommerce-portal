package com.jnntechnologies.clothingstore.mapper;

import com.jnntechnologies.clothingstore.dto.ShippingDto;
import com.jnntechnologies.clothingstore.entity.Shipping;

public class ShippingMapper {
    public static ShippingDto mapToShippingDto(Shipping shipping,ShippingDto shippingDto){
        shippingDto.setId(shipping.getId());
        shippingDto.setRates(shipping.getRates());
        shippingDto.setZipCode(shipping.getZipCode());
        return shippingDto;
    }

    public static Shipping mapToShipping(ShippingDto shippingDto,Shipping shipping){
        shipping.setZipCode(shippingDto.getZipCode());
        shipping.setRates(shippingDto.getRates());
        return shipping;
    }
}
