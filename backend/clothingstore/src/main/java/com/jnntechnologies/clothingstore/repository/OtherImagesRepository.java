package com.jnntechnologies.clothingstore.repository;

import com.jnntechnologies.clothingstore.entity.OtherImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtherImagesRepository extends JpaRepository<OtherImages,Integer> {
}
