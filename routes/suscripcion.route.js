const suscripcionCtrl = require ('./../controllers/suscripcion.controller');

const express = require('express');
const router = express.Router();

router.get('/', suscripcionCtrl.getSuscripciones);
router.post('/', suscripcionCtrl.createSuscripcion);
router.get('/:id', suscripcionCtrl.getSuscripcion);
router.delete('/:id', suscripcionCtrl.deleteSuscripcion);
router.get('/dniSocio/:dniSocio', suscripcionCtrl.getSuscripcionesDniSocio);

module.exports = router;