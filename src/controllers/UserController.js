
import { response } from "express"
import User from "../models/User.js"

async function getUsers(req, res) {
    const users = await User.find()
    return res.json(users)
}

async function createUser(req, res) {
    const user = req.body
    const newUser = await User.create(user)
    return res.status(201).json({ message: `Usuario criado. ${newUser.name}, ${newUser.age} anos.`})
}

async function deleteUser(req, res) {
    const id  = req.params.id
    const user = await User.findById(id)
    await User.findByIdAndDelete( { _id: id } )
    return res.status(200).json( { response: `Usuario ${user.name} deletado.` } )
}

async function updateUser(req, res) {
    const id = req.params.id
    const oldUser = await User.findById(id)
    const { name, age } = req.body
    await User.findByIdAndUpdate( 
        id,
        {name: name, age: age},
        {new: true}
    )
    return res.status(200).json( {message: `Usuario ${oldUser.name} atualizado para ${name}, ${age} anos.`} )
}

export { getUsers, createUser, deleteUser, updateUser }