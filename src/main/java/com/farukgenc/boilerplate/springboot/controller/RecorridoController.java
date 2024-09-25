package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Recorrido;
import com.farukgenc.boilerplate.springboot.security.service.RecorridoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recorridos")
public class RecorridoController {
    @Autowired
    public RecorridoService recorridoService;

    @PostMapping("/crear")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Recorrido> crearRecorrido(@RequestBody Recorrido recorrido) {
        recorridoService.save(recorrido);
        return ResponseEntity.ok(recorrido);
    }
}
