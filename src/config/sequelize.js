const { Sequelize } = require('sequelize');

/* Déclarations initiales */

let sequelize;

/* Connexion BDD */

if(process.env.NODE_ENV==='development') { 
    sequelize = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USERNAME, process.env.DEV_DB_PASSWORD, {
        host: process.env.DEV_DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }); 
} else {
    sequelize = new Sequelize(process.env.PROD_DB_NAME, process.env.PROD_DB_USERNAME, process.env.PROD_DB_PASSWORD, {
        host: process.env.PROD_DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    });
};

/* Exportation */

module.exports = sequelize;