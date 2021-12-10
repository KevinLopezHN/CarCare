const {Router} = require('express')
const router = Router()
const administradores = require("../controllers/administrador.controller")

router.get('/',administradores.obtenerAdministradores);
router.post('/',administradores.crearAdministrador);
router.post('/login',administradores.loginAdministrador);
router.get('/:id',administradores.obtenerAdministrador);
router.put('/:id',administradores.editarAdministrador);
router.delete('/:id',administradores.eliminarAdministrador);

module.exports = router;