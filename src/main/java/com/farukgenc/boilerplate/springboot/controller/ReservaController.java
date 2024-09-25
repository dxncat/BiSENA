package com.farukgenc.boilerplate.springboot.controller;

import com.farukgenc.boilerplate.springboot.model.Bicicleta;
import com.farukgenc.boilerplate.springboot.model.Recorrido;
import com.farukgenc.boilerplate.springboot.model.Reserva;
import com.farukgenc.boilerplate.springboot.model.User;
import com.farukgenc.boilerplate.springboot.security.service.BicicletaService;
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
    public BicicletaService bicicletaService;

    @PostMapping("/create")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Reserva> createReserva(@RequestBody Reserva reserva) {
        double discount = 0.0;

        // Recuperar el usuario completo usando el ID que viene en el JSON
        User user = userService.findById(reserva.getUser().getId());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        reserva.setUser(user);

        // Recuperar la bicicleta usando el ID que viene en el JSON
        Bicicleta bicicleta = bicicletaService.findById(reserva.getBicicleta().getId());
        if (bicicleta == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        reserva.setBicicleta(bicicleta);

        // Recuperar el recorrido usando el ID que viene en el JSON
        Recorrido recorrido = recorridoService.findById(reserva.getRecorrido().getId());
        if (recorrido == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        reserva.setRecorrido(recorrido);

        // Aplicar el descuento basado en el estrato del usuario
        int estrato = user.getEstrato();
        if (estrato == 1 || estrato == 2) {
            discount = 0.10;
        } else if (estrato == 3 || estrato == 4) {
            discount = 0.05;
        }

        // Aplicar el descuento al valor de la reserva
        reserva.setValor(reserva.getValor() - reserva.getValor() * discount);

        // Guardar la reserva
        reservaService.crearReserva(reserva);

        // Retornar la respuesta con el objeto reserva guardado
        return ResponseEntity.status(HttpStatus.CREATED).body(reserva);
    }


}
