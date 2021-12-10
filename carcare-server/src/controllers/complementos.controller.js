const complementoController={}

const Complemento= require("../models/complementos")

complementoController.obtenerComplementos = async (req,res) =>{
   const complementos = await Complemento.find()
   res.json(complementos)
}

complementoController.crearComplemento = async (req,res) =>{
    const nuevoComplemento= await Complemento(req.body)
    await nuevoComplemento.save()
    res.send({message: "Complemento creado"})
}


complementoController.obtenerComplemento = async(req,res) =>{
    const complemento = await Complemento.findById(req.params.id)
    res.send(complemento)
}


complementoController.editarComplemento = async(req,res) =>{
    await Complemento.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Complemento Actualizado'})
}


complementoController.eliminarComplemento = async(req,res) =>{
await Complemento.findByIdAndDelete(req.params.id)
res.json({status: 'Complemento Eliminado'})
}



module.exports =  complementoController