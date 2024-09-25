package com.farukgenc.boilerplate.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "recorridos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Recorrido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false, length = 50)
    private String origen;
    @Column(unique = true, nullable = false, length = 50)
    private String destino;
}
