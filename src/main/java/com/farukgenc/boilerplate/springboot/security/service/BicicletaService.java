package com.farukgenc.boilerplate.springboot.security.service;

import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import com.farukgenc.boilerplate.springboot.repository.BicicletaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BicicletaService {
    @Autowired
    BicicletaRepository bicicletaRepository;

    public List<Bicicleta> findAll() {
        return bicicletaRepository.findAll();
    }

    public Bicicleta findById(Long id) {
        return bicicletaRepository.findById(id).get();
    }
    @Transactional
    public void save(Bicicleta bicicleta) {
        bicicletaRepository.save(bicicleta);
    }

    @Transactional
    public Optional<Bicicleta> updateEstadoBicicleta(Long id, String estado) {
        Optional<Bicicleta> bicicletaOpt = bicicletaRepository.findById(id);

        // Check if the Bicicleta exists
        if (bicicletaOpt.isPresent()) {
            Bicicleta bicicleta = bicicletaOpt.get();
            bicicleta.setEstado(estado);
            bicicletaRepository.save(bicicleta);
            return Optional.of(bicicleta);
        } else {
            return Optional.empty();
        }
    }


    public boolean exist(Long id) {
        return bicicletaRepository.existsById(id);
    }

    public List<Bicicleta> buscarPorEstado(String estado) {
        return bicicletaRepository.findBicicletaByEstadoContainsIgnoreCase(estado);
    }
}
