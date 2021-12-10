const {Schema,model} = require("mongoose")

const clienteSchema = new Schema({
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
    carro: {type: String, required: true}
})

module.exports = model('cliente',clienteSchema ) 