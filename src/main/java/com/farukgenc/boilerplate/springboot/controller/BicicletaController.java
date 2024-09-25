package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import com.farukgenc.boilerplate.springboot.security.service.BicicletaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bicicletas")
@CrossOrigin(origins = "*")
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

    @GetMapping("/estado/{estado}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Bicicleta>> getBicicletaPorEstado(@PathVariable String estado) {
        return ResponseEntity.ok(bicicletaService.buscarPorEstado(estado));
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<String> actualizarEstado(@PathVariable Long id, @RequestBody String nuevoEstado) {
        Optional<Bicicleta> bicicletaOpt = bicicletaService.updateEstadoBicicleta(id, nuevoEstado);

        if (bicicletaOpt.isPresent()) {
            return ResponseEntity.ok("Estado actualizado con éxito");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/create")
    public ResponseEntity<String> crearBicicleta(@RequestBody Bicicleta bicicleta) {
        bicicletaService.save(bicicleta);
        return ResponseEntity.ok("Bicicleta " + bicicleta.getId() + " created");
    }
}



