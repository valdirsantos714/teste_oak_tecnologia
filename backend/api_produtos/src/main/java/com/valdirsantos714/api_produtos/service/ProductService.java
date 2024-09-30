package com.valdirsantos714.api_produtos.service;

import com.valdirsantos714.api_produtos.model.Product;
import com.valdirsantos714.api_produtos.payload.ProductPayloadRequest;
import com.valdirsantos714.api_produtos.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public Product save(ProductPayloadRequest productDto) {

        var product = new Product(productDto.name(), productDto.description(), productDto.price(), productDto.availableForSale());

        return repository.save(product);
    }

    public List<Product> findAllByOrderByPriceAsc() {
        return repository.findAllByOrderByPriceAsc();
    }

    public Page<Product> getProdutosPaginados(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).ascending());
        return repository.findAll(pageable);
    }

    public Product findById(Long id) {
        return  repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Erro Product não encontrado"));
    }

    public Product update(Long id, ProductPayloadRequest updatedProduct) {

        var product = findById(id);

        product.setName(updatedProduct.name());
        product.setDescription(updatedProduct.description());
        product.setPrice(updatedProduct.price());
        product.setAvailableForSale(updatedProduct.availableForSale());
        repository.save(product);

        return product;
    }

     public void delete(Long id) {
        var product = findById(id);

        repository.deleteById(id);
    }
    
}
