package com.farukgenc.boilerplate.springboot.repository;

import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BicicletaRepository extends JpaRepository<Bicicleta, Long> {
    List<Bicicleta> findBicicletaByEstadoContainsIgnoreCase(String estado);
}
