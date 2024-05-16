package com.jnntechnologies.clothingstore.controller;

import com.jnntechnologies.clothingstore.dto.ResponseDto;
import com.jnntechnologies.clothingstore.dto.SizeDto;
import com.jnntechnologies.clothingstore.entity.Size;
import com.jnntechnologies.clothingstore.repository.SizeRepository;
import com.jnntechnologies.clothingstore.service.ISizeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/api/size")
@CrossOrigin(origins = "*")
@Slf4j
public class SizeController {

    private final ISizeService iSizeService;

    private final SizeRepository sizeRepository;

    @PostMapping("/")
    public ResponseEntity<ResponseDto> createSize(@RequestBody SizeDto sizeDto){
        iSizeService.createSize(sizeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"New Size Created"));

    }

//    @PostMapping("/createAll")
//    public ResponseEntity<ResponseDto> CreateSizes(@RequestBody SizeDtos sizeDtos){
//        iSizeService.createAllSize(sizeDtos);
//        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(201,"Sizes created successfully"));
//
//    }

    @GetMapping("/")
    public List<Size> getAllSize(){
        return iSizeService.getAllSizes();
    }

    @DeleteMapping("/delete")
    public void deleteAllSize(){
        sizeRepository.deleteAll();
    }
}
