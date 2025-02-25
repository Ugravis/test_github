const crypto     = require('crypto');
const { models } = require('../../db/dbIndex');


/*
    Gestion de l'id du client (stocké en cookie)
    - SI l'id est valide et qu'il existe dans la bdd, next()
    - SINON, création de l'id et envoie du cookie au front
    req.clientId
*/


module.exports = async (req, res, next) => { 


/* Déclarations initiales */
    
    let   isClientIdExists = false;
    let   clientId         = req.cookies.clientId; 
    const regex            = /^[A-Z0-9]{14}-[0-9A-Fa-f]+-\d+$/;

/* Vérification présence cookie ou header d'acceptation */

    if(clientId) { 
        isClientIdExists = await models.Log.findOne({ where: { client_id: clientId } }); 
    } else if(req.headers.cookiesaccepted && req.headers.cookiesaccepted==='true') {
        // Continue 
    } else {
        return next(); 
    };

    isClientIdExists = !!isClientIdExists;

/* SI le clientId trouvé n'existe pas ou est invalde... */

    if(!clientId || !regex.test(clientId) || !isClientIdExists) {
        const clientIdCount = (await models.Log.count({ group: ['client_id'] })).length;

        const randomCode    = crypto.randomBytes(7).toString('hex').toUpperCase();
        const dateNow       = Date.now();

        clientId = `${randomCode}-${dateNow}-${clientIdCount+1}`;
    };

/* Fin du middleware */

    res.cookie('clientId', clientId, { maxAge: 1000*60*60*24 * 1000, domain: process.env.NODE_ENV==='development'?undefined:'.zouzoual.fr' });
    req.clientId = clientId;

    next();
};