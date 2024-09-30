package com.valdirsantos714.api_produtos.infra.springdoc;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfigurations {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Api de Produtos")
                        .description("Api de Produtos é uma API que permite que os usuários cadastrem produtos e visualizem uma lista desses produtos, que é automaticamente ordenada do menor para o maior valor.")
                        .contact(new Contact()
                                .name("Valdir Santos")
                                .email("valdirsantost40@gmail.com")));

    }
}