const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.set("port",4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());//para entender los objetos json
app.use(express.urlencoded({extended: false})); // para entender datos que vienen de formularios html

app.use("/api/empleados",require('./routes/empleados.routes'))
app.use("/api/clientes",require('./routes/clientes.routes'))
app.use("/api/servicios",require('./routes/servicios.routes'))
app.use("/api/complementos",require('./routes/complementos.routes'))
app.use("/api/administradores",require('./routes/administrador.routes'))
app.use("/api/pedidos",require('./routes/pedido.routes'))



module.exports = app;