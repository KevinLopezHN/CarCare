const administradorController={}
const jwt = require('jsonwebtoken');
const Administrador= require("../models/administrador")

administradorController.obtenerAdministradores = async (req,res) =>{
   const administradores = await Administrador.find()
   res.json(administradores)
}

administradorController.crearAdministrador = async (req,res) =>{
    const nuevoAdministrador= await Administrador(req.body)
    await nuevoAdministrador.save()
    res.send({message: "Administrador creado"})
}

administradorController.loginAdministrador = async (req,res)=>{
    const { correo, contrasena } = req.body;

    const administrador = await Administrador.findOne({correo});
    if (!administrador) return res.status(401).send('Correo no existe');
    if (administrador.contrasena !== contrasena) return res.status(401).send('Contraseña erronea');

		const token = jwt.sign({_id: administrador._id}, 'secretkey');

    return res.status(200).json({token});
}

administradorController.obtenerAdministrador = async(req,res) =>{
    const administradores = await Administrador.findById(req.params.id)
    res.send(administradores)
}


administradorController.editarAdministrador = async(req,res) =>{
    await Administrador.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Administrador Actualizado'})
}


administradorController.eliminarAdministrador = async(req,res) =>{
await Administrador.findByIdAndDelete(req.params.id)
res.json({status: 'Administrador Eliminado'})
}



module.exports =  administradorController