package com.jnntechnologies.clothingstore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor

@Data
public class ResponseDto {

    private int responseCode;
    private String reponseMessage;


}

