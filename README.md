# Introdução

Back end para a aplicação Acat Delivery. O algoritmo é um simples sistema para cadastrar cliente com seu respectivo nome, e-mail, telefone, e coordenadas (X, Y), também utiliza do algortimo do Caxeiro viajante para calcular o melhor trajeto em um plano cartesiano.

## Requisitos
- NodeJS
- PostgreSQL

# Instalação

### 1 - NodeJS
- Faça download da versão LTS do [NodeJS](https://nodejs.org/en/) e instale-o.

### 2 - PostgreSQL
- Faça download do [PostgreSQL](https://www.postgresql.org/download/) e instale-o. Crie um banco de dados com o nome que desejar e um usuário para a aplicação.

### 3 - Projeto
- Dê um GIT CLONE nesse projeto.
- Abra seu terminal na pasta do projeto e instale as dependências necessárias com o comando abaixo:

```javascript
yarn
// ou
npm install
```

### 4 - Configuração do Banco de Dados
Antes de iniciarmos o projeto precisamos fazer a configuração da conexão do banco de dados. Para isso precisaremos configurar o arquivo `ormconfig.json`, que pode ser encontrado na pasta src/database.

No arquivo, você encontrará o sequinte conteúdo:

```javascript
const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "EXAMPLE",
    password: "EXAMPLE",
    database: "EXAMPLE",
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/entities/*.ts"]
})
```

Troque os valores das propriedades abaixo para os valores que correspondem a conexão do banco de dados criado no passo 2.

```
...
    username: "EXAMPLE",
    password: "EXAMPLE",
    database: "EXAMPLE",
...
```

### 4 - Executando as migrations
Após realizar a instalação das dependências do projeto e configuração do banco de dados, iremos executar o comando para rodar as migrations no banco de dados. Execute o comando abaixo:

```javascript
yarn migration:up
// ou
npm run migration:up
```

# Uso

### 1 - API
- Inicie a API com o comando abaixo:

```javascript
yarn dev
// ou
npm run dev
```

Após rodar o comando acima, sua API estará disponível na porta 3333
