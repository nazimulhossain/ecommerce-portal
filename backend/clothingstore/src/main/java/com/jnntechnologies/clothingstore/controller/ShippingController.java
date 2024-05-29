package com.jnntechnologies.clothingstore.controller;

import com.jnntechnologies.clothingstore.dto.ResponseDto;
import com.jnntechnologies.clothingstore.dto.ShippingDto;
import com.jnntechnologies.clothingstore.dto.ShippingDtos;
import com.jnntechnologies.clothingstore.service.IShippingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/shippings",produces = {MediaType.APPLICATION_JSON_VALUE})
public class ShippingController {

    private final IShippingService iShippingService;

    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createShippingRate(@RequestBody ShippingDto shippingDto){
        iShippingService.createShippingRates(shippingDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"resource created successfully"));

    }

    @PostMapping("/rates")
    public ResponseEntity<ResponseDto> createListShippingRates(@RequestBody ShippingDtos shippingDtos){
        iShippingService.createListShippingRate(shippingDtos);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"Resources created successfully"));


    }

    @GetMapping("/zipcode/{zipcode}")
    public ResponseEntity<ShippingDto> getShippingRate(@PathVariable String zipcode){
        ShippingDto shippingDto = iShippingService.getShippingRates(zipcode);
        return ResponseEntity.status(HttpStatus.OK).body(shippingDto);

    }

    @PutMapping("/id/{shippingId}")
    public ResponseEntity<ResponseDto> updateShippingRate(@PathVariable String shippingId,@RequestBody ShippingDto shippingDto){
        iShippingService.updateShippingRate(shippingId,shippingDto);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(201,"Resource updated successfully"));


    }

    @DeleteMapping("/id/{shippingId}")
    public ResponseEntity<ResponseDto> deleteShippingRate(@PathVariable String shippingId){
        iShippingService.deleteShipping(shippingId);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(204,"Resource deleted successfully"));

    }
}
