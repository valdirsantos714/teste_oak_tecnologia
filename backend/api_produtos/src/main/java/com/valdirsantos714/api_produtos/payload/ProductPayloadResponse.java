package com.valdirsantos714.api_produtos.payload;

import com.valdirsantos714.api_produtos.model.Product;

public record ProductPayloadResponse(Long id,String name, String description, Double price, Boolean availableForSale) {

    public ProductPayloadResponse(Product p) {
        this(p.getId(), p.getName(), p.getDescription(), p.getPrice(), p.getAvailableForSale());
    }
}
