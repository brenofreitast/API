/*  Uma API (Interface de Programação de Aplicações) é um conjunto de regras e definições que 
    permite que diferentes softwares se comuniquem entre si, funcionando como uma "ponte" ou 
    "garçom" que recebe pedidos (solicitações) de um aplicativo (cliente) e entrega as respostas 
    (dados) de outro sistema (servidor), como quando um app de transporte usa a API do Google 
    Maps para mostrar rotas ou um site usa a API de um banco para pagamentos.
*/

/*
    - node --watch api.js -> Rodar o servidor
    - criar um script para rodar server = Em packge.json => scripts => 
        criar = "dev": "node --watch api.js" => no terminal = npm run dev.
    1 - npm init -y     -> iniciar um novo projeto npm
    2 - npm i express   -> framework
    3 - npm i mongoose  -> facilita a interação com o MongoDB
    3 - em package.json criar = "type": "module"
    4 - localhost:3000
*/

import express from "express"
import connectDatabase from "./database/db.js"
import routes from './routes.js'

const app = express()
app.use(express.json())
app.use(routes)


connectDatabase()
    .then(() => {   // Para caso a conexao dê certo.
        app.listen(3000, () => {
            console.log('Banco de dados conectado.')
        })
    })   
    .catch(() => console.log('Erro ao conectar ao banco de dados.'))    // Para caso a conexao dê errado.
