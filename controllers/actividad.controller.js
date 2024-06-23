const Actividad = require ('./../models/actividad');
const actividadCtrl = {}

actividadCtrl.getActividades = async (req, res) => {
    const actividades = await Actividad.find();
    res.json(actividades);
}

actividadCtrl.createActividad = async (req, res) => {
    var actividad = new Actividad(req.body);
    try {
        await actividad.save();
        res.json({
            'status': '1',
            'message': 'Actividad creada.'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
           'message': 'Error al crear la actividad.'
        }) 
    }
}

actividadCtrl.getActividad = async (req, res) => {
    const actividad = await Actividad.findById(req.params.id);
    res.json(actividad);
}

actividadCtrl.deleteActividad = async (req, res) => {
    try {
        await Actividad.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Actividad eliminada'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'message': 'Error procesando la operacion'
        })
    }
}

module.exports = actividadCtrl;