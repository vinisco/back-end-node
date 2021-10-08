## Começando

Para executar o projeto, será necessário:

- [Docker: para criar o servidor regis da aplicação](https://www.docker.com/)
- [Yarn: para usar como gerenciador de pacotes pro projeto](https://yarnpkg.com/lang/en/docs/install/)
- [Node.js: para executar os nossos códigos](https://nodejs.org/en/download/)

## Instalando

Para iniciar a instalação é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/vinisco/back-end-node
```

Depois utilizar o yarn install dentro do diretório para instalar as dependencias:

```shell
yarn install
```

Logo após, criar um container no Docker com a imagem do Regis:

```shell
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

## Executando

Criar as váriaveis de ambiente utilizando como base o arquivo .env.example:

Executar a aplicação no modo desenvolvedor:

```shell
yarn dev
```
