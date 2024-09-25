package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Reserva;
import com.farukgenc.boilerplate.springboot.security.service.RecorridoService;
import com.farukgenc.boilerplate.springboot.security.service.ReservaService;
import com.farukgenc.boilerplate.springboot.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {
    @Autowired
    public ReservaService reservaService;
    public UserService userService;
    public RecorridoService recorridoService;

    @PostMapping("/create")
    public ResponseEntity<Reserva> createReserva(@RequestBody Reserva reserva) {
        double discount = 0.0;

        int estrato = reserva.getUser().getEstrato();

        // Set discount based on user's estrato
        if (estrato == 1 || estrato == 2) {
            discount = 0.10;
        } else if (estrato == 3 || estrato == 4) {
            discount = 0.05;
        }

        // Apply discount
        reserva.setValor(reserva.getValor() - reserva.getValor() * discount);
        reserva.setUser(userService.findById(reserva.getUser().getId()));

        reservaService.crearReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(reserva);
    }

}
