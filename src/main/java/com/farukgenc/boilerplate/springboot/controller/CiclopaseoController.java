package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Ciclopaseo;
import com.farukgenc.boilerplate.springboot.repository.CiclopaseoRepository;
import com.farukgenc.boilerplate.springboot.security.service.CiclopaseoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciclopaseos")
@CrossOrigin(origins = "*")
public class CiclopaseoController {
    @Autowired
    private CiclopaseoService ciclopaseoService;

    @PostMapping("/create")
    public ResponseEntity<Ciclopaseo> create(@RequestBody Ciclopaseo ciclopaseo) {
        // Valida que el objeto ciclopaseo no sea nulo
        if (ciclopaseo == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        // Validar los campos requeridos (título, descripción, fecha, recorrido)
        if (ciclopaseo.getTitulo() == null || ciclopaseo.getDescripcion() == null || ciclopaseo.getFecha() == null || ciclopaseo.getRecorrido() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        // Guardar el objeto en la base de datos a través del servicio
        Ciclopaseo ciclopaseoGuardado = ciclopaseoService.save(ciclopaseo);

        // Devolver la respuesta con el objeto guardado
        return ResponseEntity.status(HttpStatus.CREATED).body(ciclopaseoGuardado);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ciclopaseo>> findAll() {
        return ResponseEntity.status(HttpStatus.FOUND).body(ciclopaseoService.getAllCiclopaseos());
    }
}
