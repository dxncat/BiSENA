package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import com.farukgenc.boilerplate.springboot.security.service.BicicletaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bicicletas")
public class BicicletaController {
    @Autowired
    private BicicletaService bicicletaService;

    @GetMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Bicicleta>> getBicicletas() {
        return ResponseEntity.ok(bicicletaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bicicleta> getBicicleta(@PathVariable Long id) {
        return ResponseEntity.ok(bicicletaService.findById(id));
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Bicicleta> actualizarEstadoBicicleta(@PathVariable Long id ,@RequestBody String estado /* Bicicleta bicicleta */) {
        if (id != null && this.bicicletaService.exist(id)){
            Bicicleta bicicleta = this.bicicletaService.findById(id);
            bicicleta.setEstado(estado);
            bicicletaService.save(bicicleta);
            return ResponseEntity.ok(bicicleta);
        }
        return ResponseEntity.badRequest().build();
    }


    @PostMapping("/create")
    public ResponseEntity<String> createBicicleta(@RequestBody Bicicleta bicicleta) {
        bicicletaService.save(bicicleta);
        return ResponseEntity.ok("Bicicleta " + bicicleta.getId() + " created");
    }


}
