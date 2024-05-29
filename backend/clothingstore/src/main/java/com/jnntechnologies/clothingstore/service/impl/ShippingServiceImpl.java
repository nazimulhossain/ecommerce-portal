package com.jnntechnologies.clothingstore.service.impl;

import com.jnntechnologies.clothingstore.dto.ShippingDto;
import com.jnntechnologies.clothingstore.dto.ShippingDtos;
import com.jnntechnologies.clothingstore.entity.Shipping;
import com.jnntechnologies.clothingstore.mapper.ShippingMapper;
import com.jnntechnologies.clothingstore.repository.ShippingRepository;
import com.jnntechnologies.clothingstore.service.IShippingService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ShippingServiceImpl implements IShippingService {

    private final ShippingRepository shippingRepository;
    @Override
    public void createShippingRates(ShippingDto shippingDto) {
        Shipping shipping = ShippingMapper.mapToShipping(shippingDto,new Shipping());
        shippingRepository.save(shipping);

    }

    @Override
    public void createListShippingRate(ShippingDtos shippingDtos) {
        List<Shipping> shippings = new ArrayList<>();
        for (int i=0;i<shippingDtos.getShipping().size();i++){
            Shipping shipping = ShippingMapper.mapToShipping(shippingDtos.getShipping().get(i),new Shipping() );
            shippings.add(shipping);
        }
        shippingRepository.saveAll(shippings);

    }

    @Override
    public ShippingDto getShippingRates(String zipCode) {
        Optional<Shipping> shipping = shippingRepository.findByZipCode(Integer.valueOf(zipCode));
        if(shipping.isPresent()){
            ShippingDto shippingDto = ShippingMapper.mapToShippingDto(shipping.get(),new ShippingDto());
            return shippingDto;
        }
        return null;
    }

    @Override
    public void updateShippingRate(String shippingId, ShippingDto shippingDto) {
        Optional<Shipping> shipping = shippingRepository.findById(Integer.valueOf(shippingId));
        if(shipping.isPresent()){
            Shipping shippingData = ShippingMapper.mapToShipping(shippingDto,shipping.get());
            shippingRepository.save(shippingData);


        }

    }

    @Override
    public void deleteShipping(String id) {
        Optional<Shipping> shipping = shippingRepository.findById(Integer.valueOf(id));
        if(shipping.isPresent()){
            shippingRepository.delete(shipping.get());
        }

    }
}
