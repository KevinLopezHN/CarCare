const empleadoController={}
const jwt = require('jsonwebtoken');
const Empleado= require("../models/empleados")

empleadoController.obtenerEmpleados = async (req,res) =>{
   const empleados = await Empleado.find()
   res.json(empleados)
}

empleadoController.crearEmpleado = async (req,res) =>{
    const nuevoEmpleado= await Empleado(req.body)
    await nuevoEmpleado.save();

    const token = jwt.sign({_id:nuevoEmpleado._id},'secretkey')
    res.status(200).json({token})

    
}
empleadoController.loginEmpleado = async (req,res)=>{
    const { correo, contrasena } = req.body;

    const empleado = await Empleado.findOne({correo});
    if (!empleado) return res.status(401).send('Correo no existe');
    if (empleado.contrasena !== contrasena) return res.status(401).send('Contraseña erronea');

		const token = jwt.sign({_id: empleado._id}, 'secretkey');

    return res.status(200).json({token:token,empleado});
}
empleadoController.perfil = async (req,res)=>{
    const { correo, contrasena } = req.body;

    const empleado = await Empleado.findOne({correo});
   
		

    return res.status(200).send({empleado});
}
empleadoController.verifyToken = async(req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

empleadoController.obtenerEmpleado = async(req,res) =>{
    const empleado = await Empleado.findById(req.params.id)
    res.send(empleado)
}


empleadoController.editarEmpleado = async(req,res) =>{
    await Empleado.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Empleado Actualizado'})
}


empleadoController.eliminarEmpleado = async(req,res) =>{
    await Empleado.findByIdAndDelete(req.params.id)
    res.json({status: 'Empleado Eliminado'})
}



module.exports =  empleadoController