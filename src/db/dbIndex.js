/* Declarations initiales */


let force = true;
if(process.env.NODE_ENV!=='development') force = false;


/* Connexions */


// Connexion Mysql db
const sequelize = require('../config/sequelize.js');
// Models
const { models, modelCount } = require('./handlers/modelsHandler.js'); 
// Hooks
const hookModelCount = require('./handlers/hooksHandler.js')(models); 


/* Init DB */


const initDb = () => {
    return sequelize.sync({ force }).then(async _ => { 
        return { dbStatut: true, modelCount, hookModelCount };

    }).catch(err => {
        console.error(`Error during the DB launch: `, err)
        return { dbStatut: false };
    });
};


/* Exportations */


module.exports = {
    sequelize,
    initDb,
    models
};