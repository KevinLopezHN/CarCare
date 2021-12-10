const {Schema,model} = require("mongoose")

const pedidoSchema = new Schema({
    nombreEmpleado: {type: String, required: false},
    nombreCliente: {type: String, required: false},
    direccionCliente: {type: String, required: false},
    carroCliente: {type: String, required: false},
    telefonoCliente: {type: String, required: false},
    nombreServicio: {type: String, required: false},
    nombreComplemento: {type: String,default: null},
    precioTotal:{type: String, required: false},
    instrucciones:{type: String, required: false},
    fecha:{type: Date,required: false},
    estado:{type:String,default:'pendiente',enum:['pendiente','aceptado','en proceso','completado','cancelado']
    }
})

module.exports = model('pedido',pedidoSchema ) 