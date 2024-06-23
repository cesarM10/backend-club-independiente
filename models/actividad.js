const mongoose = require('mongoose');
const {Schema} = mongoose;

const ActividadSchema = new Schema({
    codigoActividad: {type: Number, required: true},
    nombreActividad: {type: String, required: true},
    responsableActividad: {type: String, required: true},
    horarioActividad: {type: String, required: true}
})

module.exports = mongoose.models.Actividad || mongoose.model('Actividad', ActividadSchema);