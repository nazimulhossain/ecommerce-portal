package com.jnntechnologies.clothingstore.repository;

import com.jnntechnologies.clothingstore.entity.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping,Integer> {
    Optional<Shipping> findByZipCode(int zipCode);
}
