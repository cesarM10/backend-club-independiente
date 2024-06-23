const mongoose = require('mongoose');
const {Schema} = mongoose;

const SocioSchema = new Schema({
    numeroSocio: {type: String, required: true},
    dniSocio: {type: String, required: true},
    nombreSocio: {type: String, required: true},
    apellidoSocio: {type: String, required: true},
    fechaNacimiento: {type: String, required: true},
    correoSocio: {type: String, required: true},
    telefonoSocio: {type: Number, required: true}
})

module.exports = mongoose.models.Socio || mongoose.model('Socio', SocioSchema);