const {Schema,model} = require("mongoose")

const empleadoSchema = new Schema({
    nombre: {type: String, required: false},
    telefono: {type: String, required: false},
    direccion: {type: String, required: false},
    correo: {type: String, required: false},
    contrasena: {type: String, required: false},
})

module.exports = model('empleado',empleadoSchema ) 