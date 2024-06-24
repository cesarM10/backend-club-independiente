const mongoose = require('mongoose');
const {Schema} = mongoose;
const Socio = require('./../models/socio');
const Actividad = require('./../models/actividad');

const SuscripcionSchema = new Schema({
    fechaVtoSus: {type: String, required: true},
    fechaSus: {type: String, required: true},
    socio: {type: Schema.Types.ObjectId, ref: Socio, required: true},
    actividad: {type: Schema.Types.ObjectId, ref: Actividad, required: true}
})

module.exports = mongoose.models.Suscripcion || mongoose.model('Suscripcion', SuscripcionSchema);