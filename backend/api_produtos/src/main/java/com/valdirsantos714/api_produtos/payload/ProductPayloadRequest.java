package com.valdirsantos714.api_produtos.payload;

import com.valdirsantos714.api_produtos.model.Product;

public record ProductPayloadRequest(String name, String description, Double price, Boolean availableForSale) {

    public ProductPayloadRequest(Product p) {
        this(p.getName(), p.getDescription(), p.getPrice(), p.getAvailableForSale());
    }
}
