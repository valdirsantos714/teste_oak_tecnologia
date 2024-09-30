package com.valdirsantos714.api_produtos.controller;

import com.valdirsantos714.api_produtos.model.Product;
import com.valdirsantos714.api_produtos.payload.ProductPayloadRequest;
import com.valdirsantos714.api_produtos.payload.ProductPayloadResponse;
import com.valdirsantos714.api_produtos.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "Retorna lista de todos os Produtos usando Paginação para controle do desempenho da api",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado produtos"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @GetMapping("/all/pageable")
    public Page<Product> findAllPageable(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size,
            @RequestParam(defaultValue = "price") String sortBy) {
        return service.getProdutosPaginados(page, size, sortBy);
    }

    @Operation(summary = "Retorna lista de todos os Produtos",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado produtos"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @GetMapping("/all")
    public ResponseEntity findAll() {
        var list = service.findAllByOrderByPriceAsc();

        return ResponseEntity.ok().body(list.stream().map(ProductPayloadResponse::new));
    }

    @Operation(summary = "Retorna um Produto pelo id",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado o produto"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @GetMapping(value = "/{id}")
    public ResponseEntity findByIdProduct(@PathVariable Long id) {
        var product = service.findById(id);

        return ResponseEntity.ok().body(new ProductPayloadResponse(product));
    }

    @Operation(summary = "Atualiza um Produto pelo id",  responses = {
            @ApiResponse(description = "Requisição feita com sucesso", responseCode = "200"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado o produto"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @PutMapping(value = "/{id}")
    public ResponseEntity updateProduct(@PathVariable Long id, @RequestBody @Valid ProductPayloadRequest productPayload) {
        var product = service.update(id, productPayload);

        return ResponseEntity.ok().body(new ProductPayloadResponse(product));
    }

    @Operation(summary = "Salva um Produto",  responses = {
            @ApiResponse(description = "Produto salvo com sucesso!", responseCode = "201"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado o produto"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @PostMapping
    public ResponseEntity saveProduct(@RequestBody @Valid ProductPayloadRequest productPayload) {
        var product = service.save(productPayload);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ProductPayloadResponse(product));
    }

    @Operation(summary = "Deleta um Produto pelo id",  responses = {
            @ApiResponse(description = "Produto deletado com sucesso!", responseCode = "204"),
            @ApiResponse(responseCode = "404", description = "Erro! Não foi encontrado o produto"),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor")
    })
    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
