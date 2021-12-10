const {Router} = require('express')
const router = Router()
const pedidos = require("../controllers/pedido.controller")

router.get('/',pedidos.obtenerPedidos);
router.post('/',pedidos.crearPedido);
router.get('/:id',pedidos.obtenerPedido);
router.put('/:id',pedidos.editarPedido);
router.delete('/:id',pedidos.eliminarPedido);

module.exports = router;