# Sistema de Cadastro e Listagem de Produtos

Este projeto é um sistema completo para cadastro e listagem de produtos. O sistema permite que os usuários cadastrem produtos e visualizem uma lista desses produtos, que é automaticamente ordenada do menor para o maior valor.

## Requisitos

### Cadastro

O sistema permite o cadastro de produtos através de um formulário com os seguintes campos:

- **Nome do Produto**: Campo de texto para inserir o nome do produto.
- **Descrição do Produto**: Campo de texto para fornecer uma descrição do produto.
- **Valor do Produto**: Campo para inserir o valor do produto.
- **Disponível para Venda**: Campo com duas opções: "Sim" ou "Não", para indicar se o produto está disponível para venda.

### Listagem

Na página de listagem, os produtos são apresentados em uma tabela com as seguintes características:

- **Colunas da Listagem**: 
  - Nome
  - Valor

- **Ordenação**: Os produtos são automaticamente ordenados do menor para o maior valor.

- **Atualização Automática**: Ao cadastrar um novo produto, a listagem é atualizada automaticamente para incluir o novo produto.

- **Botão para Cadastro de Novo Produto**: Existe um botão que redireciona o usuário para o formulário de cadastro de um novo produto.

## Tecnologias Utilizadas

### Frontend

- **React.js**: Biblioteca para construção da interface do usuário.
- **Vite**: Ferramenta de build para desenvolvimento rápido e otimizado.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React Router DOM**: Para gerenciamento de rotas.
- **Tailwind CSS**: Framework CSS para estilização da interface.
- **Fetch API**: Para fazer chamadas HTTP ao backend.

### Backend

- **Java 17**: Linguagem de programação para o desenvolvimento do backend.
- **Spring Boot**: Framework para criação de aplicações Java.
- **Spring Web**: Módulo do Spring para construção de APIs RESTful.
- **Spring Data JPA**: Para interação com o banco de dados usando JPA (Java Persistence API).
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento dos dados.
- **Lombok**: Biblioteca que ajuda a reduzir o boilerplate code em Java.
- **Validation**: Para validação de dados de entrada.

## Instruções de Uso

### Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado em sua máquina.
- **NPM ou Yarn**: Um gerenciador de pacotes para instalar as dependências do projeto. O NPM geralmente vem com o Node.js.
- **Java 17**: Verifique se o JDK 17 está instalado em sua máquina.
- **Docker**: Necessário para facilitar a criação do banco de dados PostgreSQL. Certifique-se de que o Docker está instalado e em execução.

### Clone o Repositório

```bash
git clone https://github.com/valdirsantos714/teste_oak_tecnologia.git
cd teste_oak_tecnologia
```


### Inicie o Banco de Dados

Para que o projeto seja executado funcione da maneira correta,deve-se configurar e iniciar o banco de dados PostgreSQL, para fazer isto basta  navegar até a pasta do backend do projeto e executar o seguinte comando no terminal:

```bash
docker-compose up -d
```

Isso iniciará o banco de dados de forma rápida e fácil. 

### Inicie o Backend

1. Após isso Navegue até a pasta do **backend** do projeto.
2. Execute a API com o seguinte comando. A API estará ativa na porta **8080**:

   ```bash
   ./mvnw spring-boot:run
   ```

3. Após iniciar, você pode acessar a API através do seguinte endereço:

   ```
   http://localhost:8080
   ```


### Inicie o Frontend

1. Navegue até a pasta **frontend** do projeto.
2. Instale as dependências do projeto (se ainda não estiver feito):

```bash
npm install
```

3. Inicie o servidor de desenvolvimento do React:

```bash
npm run dev
```

### Acesso ao Sistema

Após iniciar o backend e o frontend, você pode acessar o sistema no navegador através do seguinte endereço:

```
http://localhost:5173
```

## Contribuições

Contribuições são bem-vindas! Se você gostaria de contribuir para este projeto, por favor, envie um pull request ou abra uma issue para discussão.
