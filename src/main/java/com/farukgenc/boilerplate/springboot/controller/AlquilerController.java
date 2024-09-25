package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Alquiler;
import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import com.farukgenc.boilerplate.springboot.model.Recorrido;
import com.farukgenc.boilerplate.springboot.model.User;
import com.farukgenc.boilerplate.springboot.repository.BicicletaRepository;
import com.farukgenc.boilerplate.springboot.repository.RecorridoRepository;
import com.farukgenc.boilerplate.springboot.repository.UserRepository;
import com.farukgenc.boilerplate.springboot.security.service.AlquilerService;
import com.farukgenc.boilerplate.springboot.security.service.BicicletaService;
import com.farukgenc.boilerplate.springboot.security.service.RecorridoService;
import com.farukgenc.boilerplate.springboot.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alquiler")
public class AlquilerController {
    @Autowired
    private AlquilerService alquilerService;

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Alquiler>> getAllAlquiler(){
        List<Alquiler> alquileres = alquilerService.findAll();
        return ResponseEntity.ok(alquileres);
    }

    @PostMapping("/alquiler/create")
    public ResponseEntity<String> crearAlquiler(@RequestBody Alquiler alquiler) {
        try {
            alquilerService.save(alquiler);
            return ResponseEntity.ok("Alquiler y recorrido creados correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }


}
