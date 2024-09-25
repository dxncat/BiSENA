package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Alquiler;
import com.farukgenc.boilerplate.springboot.security.service.AlquilerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alquiler")
public class AlquilerController {
    @Autowired
    private AlquilerService alquilerService;

    @PostMapping("/create")
    public ResponseEntity<String> crearAlquiler(@RequestBody Alquiler alquiler) {
        alquilerService.save(alquiler);
        return ResponseEntity.ok("Alquiler creado correctamente");
    }
}
