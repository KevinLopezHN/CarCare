const {Router} = require('express')
const router = Router()
const servicios = require("../controllers/servicios.controller")

router.get('/',servicios.obtenerServicios);
router.post('/',servicios.crearServicio);
router.get('/:id',servicios.obtenerServicio);
router.put('/:id',servicios.editarServicio);
router.delete('/:id',servicios.eliminarServicio);

module.exports = router;