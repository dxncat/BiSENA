package com.farukgenc.boilerplate.springboot.repository;

import com.farukgenc.boilerplate.springboot.model.Alquiler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlquilerRepository extends JpaRepository<Alquiler, Long> {
}
