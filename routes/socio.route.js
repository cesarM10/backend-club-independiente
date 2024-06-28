const socioCtrl = require('./../controllers/socio.controller');

const express = require('express');
const router = express.Router();

router.get('/', socioCtrl.getSocios);
router.post('/', socioCtrl.createSocio);
router.get('/ultimo/', socioCtrl.getUltimo);
router.get('/:dniSocio', socioCtrl.getSocio);
router.delete('/:id', socioCtrl.deleteSocio);

module.exports = router;