const ROUTES = require('../../../config/routes.js');


/*
    Tous les logs de navigation sont crées
    grâce au middleware createLog.
*/


module.exports = (app) => {
    
    app.post(ROUTES.LOGS.POST.path(), async(req, res) => { 

        try {
            return res.json({ message: `Un nouveau log vient d'être créée avec succès.` }); 

        } catch(error) {
            return res.status(500).json({ message: `Une erreur est survenue lors de la création d'un log <${type}>.`, data: error });
        };
    });
};