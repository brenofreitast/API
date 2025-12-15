/*  Uma API (Interface de Programação de Aplicações) é um conjunto de regras e definições que 
    permite que diferentes softwares se comuniquem entre si, funcionando como uma "ponte" ou 
    "garçom" que recebe pedidos (solicitações) de um aplicativo (cliente) e entrega as respostas 
    (dados) de outro sistema (servidor), como quando um app de transporte usa a API do Google 
    Maps para mostrar rotas ou um site usa a API de um banco para pagamentos.
*/

/*
    - node --watch ./api.js -> Rodar o servidor
    1 - npm init -y
    2 - npm i express
    3 - em package.json criar = "type": "module"
    4 - localhost:3000
*/

import express from "express"
const app = express()
const porta = 3000

const arrResponse = [{name: 'Breno', age: 28}, {name: 'Ela', age: 23}]


app.get('/', (req, res) => {
    res.json(arrResponse)
})


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})