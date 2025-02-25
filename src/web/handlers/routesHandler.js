const fs = require('fs');
const path = require('path');

const handleRoute = (app, routePath) => { 
    const route = require(routePath); 
    route(app);
};

module.exports = (app) => {
    const routesPath = path.join(__dirname, '..', 'routes');
    let routeCount = 0;

    fs.readdirSync(routesPath).forEach((subFolder) => {
        const subFolderPath = path.join(routesPath, subFolder);

        if(fs.statSync(subFolderPath).isDirectory()) {
            
            fs.readdirSync(subFolderPath).forEach((file) => {
                const routeFilePath = path.join(subFolderPath, file); 

                if (file.endsWith('.js')) {
                    handleRoute(app, routeFilePath);
                    routeCount++;
                };
            });
        };
    });

    return routeCount;
};