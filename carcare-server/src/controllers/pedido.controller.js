const pedidoController={}

const Pedido= require("../models/pedidos")

pedidoController.obtenerPedidos = async (req,res) =>{
   const pedidos = await Pedido.find()
   res.json(pedidos)
}

pedidoController.crearPedido = async (req,res) =>{
    const nuevoPedido = await Pedido(req.body)
    await nuevoPedido.save()
    res.send({message: "Pedido creado"})
}


pedidoController.obtenerPedido = async(req,res) =>{
    const pedido = await Pedido.findById(req.params.id)
    res.send(pedido)
}


pedidoController.editarPedido = async(req,res) =>{
    await Pedido.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Pedido Actualizado'})
}


pedidoController.eliminarPedido = async(req,res) =>{
await Pedido.findByIdAndDelete(req.params.id)
res.json({status: 'Pedido Eliminado'})
}



module.exports =  pedidoController