//defino controlador para el manejo de CRUD
const actividadCtrl = require('./../controllers/actividad.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', actividadCtrl.getActividades);
router.post('/', actividadCtrl.createActividad);
router.get('/:id', actividadCtrl.getActividad);
router.delete('/:id', actividadCtrl.deleteActividad);
//exportamos el modulo de rutas
module.exports = router;