package com.valdirsantos714.api_produtos.controller;

import com.valdirsantos714.api_produtos.model.Product;
import com.valdirsantos714.api_produtos.payload.ProductPayloadRequest;
import com.valdirsantos714.api_produtos.payload.ProductPayloadResponse;
import com.valdirsantos714.api_produtos.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/all/pageable")
    public Page<Product> findAllPageable(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size,
            @RequestParam(defaultValue = "price") String sortBy) {
        return service.getProdutosPaginados(page, size, sortBy);
    }

    @GetMapping("/all")
    public ResponseEntity findAll() {
        var list = service.findAllByOrderByPriceAsc();

        return ResponseEntity.ok().body(list.stream().map(ProductPayloadResponse::new));
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity findByIdProduct(@PathVariable Long id) {
        var product = service.findById(id);

        return ResponseEntity.ok().body(new ProductPayloadResponse(product));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity updateProduct(@PathVariable Long id, @RequestBody @Valid ProductPayloadRequest productPayload) {
        var product = service.update(id, productPayload);

        return ResponseEntity.ok().body(new ProductPayloadResponse(product));
    }

    @PostMapping
    public ResponseEntity saveProduct(@RequestBody @Valid ProductPayloadRequest productPayload) {
        var product = service.save(productPayload);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ProductPayloadResponse(product));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
