const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/*
 *
 * Rota == Recurso 
 * Metodos http
 * GET: buscar/listar informações do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 */

/*
 *
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos o simbolo de "?"
 * geralmente servem para filtro, paginaçao
 *  
 * Route Params: Parâmetros utilizados para identificar recursos
 * Reques Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


app.listen(3333)