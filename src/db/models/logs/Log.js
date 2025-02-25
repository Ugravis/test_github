const { DataTypes } = require("sequelize");
const sequelize     = require("../../../config/sequelize.js");

/* Modèle Log */
    
const Log = sequelize.define('log', {

/* Champs spécifiques */

    log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    ref_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknow'
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknow'
    },

/* Champs logs Application */

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    client_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    client_ip: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    method: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknow' 
    },

    api_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'unknow'
    },

    front_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'unknow'
    },

/* Champs logs UserDatas */

    nav: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknow'
    },

    os: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknow'
    },

    languages: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'unknow'
    },

/* Champs logs GeoJS */

    country_code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    region: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "unknow"
    },

    accuracy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    timezone: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'unknow'
    },

    organization: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'unknow'
    },

/* Champs log time */

    request_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {

    timestamps: false
});

/* Exporation */
    
module.exports = Log;