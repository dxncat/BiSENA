package com.farukgenc.boilerplate.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.mapping.ToOne;


import java.util.Date;

@Entity
@Table(name = "alquileres")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Alquiler {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(nullable = false)
    private Date date;
    @ManyToOne
    @JoinColumn(name = "bici_id")
    private Bicicleta bicicleta;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "recorrido_id")
    private Recorrido recorrido;
    @Column(nullable = false)
    private double costo_unitario;
    @Column(nullable = false)
    private double costo_total;
    @Column(nullable = false)
    private String estado;

}
