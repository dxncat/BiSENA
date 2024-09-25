package com.farukgenc.boilerplate.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "ciclopaseos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ciclopaseo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String titulo;
    @Column(nullable = false)
    private String descripcion;
    @Column(nullable = false)
    private Date fecha;
    @ManyToOne
    @JoinColumn(name = "recorrido_id")
    private Recorrido recorrido;
}
