const Suscripcion = require('./../models/suscripcion');
const suscripcionCtrl = {}

suscripcionCtrl.getSuscripciones = async (req, res) => {
    const suscripciones = await Suscripcion.find().populate(["socio","actividad"]);
    res.json(suscripciones);
}

suscripcionCtrl.createSuscripcion = async (req, res) => {
    const suscripcion = new Suscripcion(req.body);
    try {
        await suscripcion.save();
        res.json({
            'status': '1',
            'message': 'Suscripcion registrada.'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'No se pudo registrar la suscripcion.'
        })
    }
}

suscripcionCtrl.getSuscripcion = async (req, res) => {
    const suscripcion = await Suscripcion.findById(req.params.id).populate(["socio", "actividad"]);
    res.json(suscripcion);
}

suscripcionCtrl.deleteSuscripcion = async (req, res) => {
    try{
        await Suscripcion.deleteOne({_id: req.params.id});
        res.json({
           'status': '1',
           'message': 'Suscripcion eliminada'
        });
    } catch(error){
        res.status(400).json({
           'status': '0',
           'message': 'Error al eliminar la suscripcion'
        });
    }
}

module.exports = suscripcionCtrl;
