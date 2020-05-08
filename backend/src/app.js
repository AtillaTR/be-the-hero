const express = require ('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());//falando para o express ir na requisiscao e transformar em formato json
app.use(routes); 
app.use(errors());

module.exports=app; 


/**
 * Rota / Recurso(geralmente associado ao BD)
 */


/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informacao do back-end(listagem,dados de um usuario)
 * POST: Criar uma informacao no back-end(criar um usuario)
 * PUT: Alterar um informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */


 /**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados enviados na rota apos o simbolo de "?"(Filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos (Dados de um unico usuario)
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos(Criar usuario, alterar usuario)
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users).select('*).where()
  */




