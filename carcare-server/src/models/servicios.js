const {Schema,model} = require("mongoose")

const servicioSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: String, required: true},
    duracion: {type: String, required: true},
})

module.exports = model('servicio',servicioSchema ) 