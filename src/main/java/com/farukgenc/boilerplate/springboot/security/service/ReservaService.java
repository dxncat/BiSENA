package com.farukgenc.boilerplate.springboot.security.service;

import com.farukgenc.boilerplate.springboot.model.Reserva;
import com.farukgenc.boilerplate.springboot.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;

    public List<Reserva> reservas() {
        return reservaRepository.findAll();
    }

    public void crearReserva(Reserva reserva) {
        reservaRepository.save(reserva);
    }
}
