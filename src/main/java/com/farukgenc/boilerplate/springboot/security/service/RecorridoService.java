package com.farukgenc.boilerplate.springboot.security.service;

import com.farukgenc.boilerplate.springboot.model.Recorrido;
import com.farukgenc.boilerplate.springboot.repository.RecorridoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecorridoService {
    @Autowired
    RecorridoRepository recorridoRepository;
    @Transactional
    public Recorrido save(Recorrido recorrido) {
        return recorridoRepository.save(recorrido);
    }


}
