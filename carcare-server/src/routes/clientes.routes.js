const {Router} = require('express')
const router = Router()
const clientes = require("../controllers/clientes.controller")

router.get('/',clientes.obtenerClientes);
router.post('/',clientes.crearCliente);
router.post('/login',clientes.loginCliente);
router.get('/:id',clientes.obtenerCliente);
router.put('/:id',clientes.editarCliente);
router.delete('/:id',clientes.eliminarCliente);

module.exports = router;