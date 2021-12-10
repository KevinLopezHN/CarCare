const servicioController={}

const Servicio= require("../models/servicios")

servicioController.obtenerServicios = async (req,res) =>{
   const servicios = await Servicio.find()
   res.json(servicios)
}

servicioController.crearServicio = async (req,res) =>{
    const nuevoServicio= await Servicio(req.body)
    await nuevoServicio.save()
    res.send({message: "Servicio creado"})
}


servicioController.obtenerServicio = async(req,res) =>{
    const servicio = await Servicio.findById(req.params.id)
    res.send(servicio)
}


servicioController.editarServicio = async(req,res) =>{
    await Servicio.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Servicio Actualizado'})
}


servicioController.eliminarServicio = async(req,res) =>{
await Servicio.findByIdAndDelete(req.params.id)
res.json({status: 'Servicio Eliminado'})
}



module.exports =  servicioController