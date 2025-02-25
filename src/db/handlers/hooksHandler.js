const fs = require('fs');
const path = require('path');

/* Définitions intiales */

const hooksPath = path.join(__dirname, '..', 'hooks');
const hooks     = {};
let   hookCount = 0;

/* Parcours des fichiers */

module.exports = (models) => {

    fs.readdirSync(hooksPath)

    .filter(file => file.endsWith('.js'))
    .forEach(file => {

        const hookName = path.basename(file, '.js');
        const filePath = path.join(hooksPath, file);
        
        hooks[hookName] = require(filePath)(models);

        hookCount+=1
    });

    return hookCount;
};