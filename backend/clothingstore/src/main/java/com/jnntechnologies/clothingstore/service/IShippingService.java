package com.jnntechnologies.clothingstore.service;

import com.jnntechnologies.clothingstore.dto.ShippingDto;
import com.jnntechnologies.clothingstore.dto.ShippingDtos;

import java.util.List;

public interface IShippingService {
    void createShippingRates(ShippingDto shippingDto);

    void createListShippingRate(ShippingDtos shippingDtos);

    ShippingDto getShippingRates(String zipCode);

    void updateShippingRate(String shippingId,ShippingDto shippingDto);

    void deleteShipping(String id);
}
