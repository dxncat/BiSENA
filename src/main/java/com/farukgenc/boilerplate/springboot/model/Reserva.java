package com.farukgenc.boilerplate.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.AccessType;

import java.util.Date;

@Entity
@Table(name = "reservas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "bici_id")
    private Bicicleta bicicleta;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recorrido_id")
    private Recorrido recorrido;
    @Column(columnDefinition = "DOUBLE DEFAULT 8000")
    private double valor;
    @Column
    private Date fecha;
}
