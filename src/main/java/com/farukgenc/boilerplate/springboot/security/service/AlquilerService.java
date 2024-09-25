package com.farukgenc.boilerplate.springboot.security.service;

import com.farukgenc.boilerplate.springboot.model.Alquiler;
import com.farukgenc.boilerplate.springboot.repository.AlquilerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlquilerService {
    @Autowired
    private AlquilerRepository alquilerRepository;

    @Transactional
    public void save(Alquiler alquiler) {
        alquilerRepository.save(alquiler);
    }
}
