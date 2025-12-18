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
import mongoose from "mongoose"
import User from "./models/User.js"

const app = express()
app.use(express.json())
app.listen(3000)

mongoose.connect("mongodb+srv://brenofreitast:bft-16079719@cluster0.4815e.mongodb.net/?appName=Cluster0")   // mongoose é uma Promisse
.then(() => console.log('Banco de dados conectado.'))   // Para caso a conexao dê certo.
.catch(() => console.log('Erro ao conectar ao banco de dados.'))    // Para caso a conexao dê errado.

const users = ['Brenno', 'Ela']

app.get("/users", async(req, res) => {

    const users = await User.find()
    return res.json(users)
})

app.delete("/users/:id", async(req, res) => {
    const {id} = req.params
    const users = await User.deleteOne({ _id: id})
    return res.status(200).json( {message: 'Usuario deletado.'})
})

app.post("/users", async(req, res) => {
    const user = req.body
    const newUser = await User.create(user)
    return res.status(201).json({message: 'Usuario criado.'})

    return res.json(newUser)
})