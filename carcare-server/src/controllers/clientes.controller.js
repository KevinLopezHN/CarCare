const clienteController={}
const jwt = require('jsonwebtoken');
const Cliente= require("../models/clientes")

clienteController.obtenerClientes = async (req,res) =>{
   const clientes = await Cliente.find()
   res.json(clientes)
}

clienteController.crearCliente = async (req,res) =>{
    const nuevoCliente= await Cliente(req.body)
    await nuevoCliente.save()
    
    const token = jwt.sign({_id:nuevoCliente._id},'secretkey')
    res.status(200).json({token})
}


clienteController.loginCliente = async (req,res)=>{
    const { correo, contrasena } = req.body;

    const cliente = await Cliente.findOne({correo});
    if (!cliente) return res.status(401).send('Correo no existe');
    if (cliente.contrasena !== contrasena) return res.status(401).send('Contraseña erronea');

		const token = jwt.sign({_id: cliente._id}, 'secretkey');

    return res.status(200).json({token});
}

clienteController.obtenerCliente = async(req,res) =>{
    const cliente = await Cliente.findById(req.params.id)
    res.send(cliente)
}


clienteController.editarCliente = async(req,res) =>{
    await Cliente.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Cliente Actualizado'})
}


clienteController.eliminarCliente = async(req,res) =>{
await Cliente.findByIdAndDelete(req.params.id)
res.json({status: 'Cliente Eliminado'})
}



module.exports =  clienteController