const {Router} = require('express')
const router = Router()
const complementos = require("../controllers/complementos.controller")

router.get('/',complementos.obtenerComplementos);
router.post('/',complementos.crearComplemento);
router.get('/:id',complementos.obtenerComplemento);
router.put('/:id',complementos.editarComplemento);
router.delete('/:id',complementos.eliminarComplemento);

module.exports = router;