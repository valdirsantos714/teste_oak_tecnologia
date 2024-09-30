package com.valdirsantos714.api_produtos.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "product_tb")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private Double price;

    private Boolean availableForSale;

    public Product(String name, String description, Double price, Boolean availableForSale) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.availableForSale = availableForSale;
    }
}
