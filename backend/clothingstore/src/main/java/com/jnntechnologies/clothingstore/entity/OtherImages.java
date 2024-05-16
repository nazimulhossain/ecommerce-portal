package com.jnntechnologies.clothingstore.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "otherimages")
public class OtherImages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int otherimagesId;
    private String name;

}
