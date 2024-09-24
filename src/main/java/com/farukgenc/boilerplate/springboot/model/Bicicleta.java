package com.farukgenc.boilerplate.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "bicicletas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bicicleta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 20)
    private String marca;
    @Column(nullable = false, length = 10)
    private String color;
    @Column(nullable = false, length = 15)
    private String estado;
    @Column(nullable = false, length = 20)
    private double precio_alquiler;
    @Column(nullable = false, length = 50)
    private String regional;
}
