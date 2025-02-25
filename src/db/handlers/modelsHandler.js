const fs = require('fs');
const path = require('path');

/* Définitions initiales */

const modelsPath = path.join(__dirname, '..', 'models');
const models = {};

/* Parcours des fichiers */

fs.readdirSync(modelsPath).forEach((subFolder) => {
    const subFolderPath = path.join(modelsPath, subFolder);

    if (fs.statSync(subFolderPath).isDirectory()) {

        fs.readdirSync(subFolderPath).forEach((file) => {

            if (file.endsWith('.js')) {
                const modelName = path.basename(file, '.js');
                const modelFilePath = path.join(subFolderPath, file);
                
                models[modelName] = require(modelFilePath);
            }
        });
    }
});

/* Exportation */

module.exports = {
    models,
    modelCount: Object.keys(models).length
};


/* NO SUB-FOLDER VERSION */

// const fs   = require('fs');
// const path = require('path');

// /* Définitions initiales */

// const modelsPath = path.join(__dirname, '..', 'models');
// const models = {};

// /* Parcours des fichiers */

// fs.readdirSync(modelsPath).forEach((file) => {

//     if (file.endsWith('.js')) {
//         const modelName = path.basename(file, '.js');
//         const modelFilePath = path.join(modelsPath, file);
        
//         models[modelName] = require(modelFilePath);
//     };
// });

// /* Exportation */

// module.exports = {
//     models,
//     modelCount: Object.keys(models).length
// };