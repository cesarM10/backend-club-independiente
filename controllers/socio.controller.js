const Socio =  require ('./../models/socio');
const socioCtrl = {}

socioCtrl.getSocios = async (req, res) => {
    var socios = await Socio.find();
    res.json(socios);
}

socioCtrl.createSocio = async (req, res) => {
    var socio = new Socio(req.body);
    try {
        await socio.save();
        res.json({
            'status': '1',
            'message': 'Socio creado...'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
           'message': 'No se pudo crear el socio...'
        });
    }
}

socioCtrl.getUltimo = async (req, res) => {
    try {
        // Obtener todos los socios y ordenarlos por numeroSocio convertido a número
        var socios = await Socio.find();

        // Devolver el último socio
        var ultimoSocio = socios[socios.length - 1];
        res.json(ultimoSocio || []);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
}

socioCtrl.getSocio = async (req, res) => {
    var socio = await Socio.find({dniSocio: req.params.dniSocio});
    res.json(socio);
}

socioCtrl.deleteSocio = async (req, res) => {
    try { 
        await Socio.deleteOne({_id: req.params.id});
        res.json({
           'status': '1',
           'message': 'Socio eliminado...'
        });
    } catch (error) {
        res.status(400).json({
           'status': '0',
           'message': 'No se pudo eliminar el socio...'
        });
    }
}

module.exports = socioCtrl;