const {Router} = require('express')
const router = Router()
const empleados = require("../controllers/empleados.controllers")

router.get('/',empleados.obtenerEmpleados);
router.post('/',empleados.crearEmpleado);
router.post('/login',empleados.loginEmpleado);
router.get('/perfil', empleados.verifyToken, empleados.perfil);
router.put('/:id',empleados.editarEmpleado);
router.delete('/:id',empleados.eliminarEmpleado);

module.exports = router;