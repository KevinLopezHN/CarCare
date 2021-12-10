const {Schema,model} = require("mongoose")

const administradorSchema = new Schema({
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    correo: {type: String, required: true},
    contrasena: {type: String, required: true},
})

module.exports = model('administrador',administradorSchema ) 