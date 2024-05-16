package com.jnntechnologies.clothingstore.repository;

import com.jnntechnologies.clothingstore.entity.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepository extends JpaRepository<Size,Integer> {
}
