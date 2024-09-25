package com.farukgenc.boilerplate.springboot.security.service;

import com.farukgenc.boilerplate.springboot.model.Ciclopaseo;
import com.farukgenc.boilerplate.springboot.repository.CiclopaseoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CiclopaseoService {
    @Autowired
    private CiclopaseoRepository ciclopaseoRepository;

    public Ciclopaseo getCiclopaseo(Long id) {
        return ciclopaseoRepository.findById(id).get();
    }
    public List<Ciclopaseo> getAllCiclopaseos() {
        return ciclopaseoRepository.findAll();
    }
    public Ciclopaseo save(Ciclopaseo ciclopaseo) {
        return ciclopaseoRepository.save(ciclopaseo);
    }
}
