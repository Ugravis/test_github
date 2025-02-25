const { DataTypes } = require("sequelize");
const sequelize     = require("../../../config/sequelize.js");

/* Modèle Test */
    
const Test = sequelize.define('test', {

/* Champs spécifiques */

    test_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    date: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {

    timestamps: false
});

/* Exporation */
    
module.exports = Test;