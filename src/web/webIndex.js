const express = require('express');

/* Declarations initiales */

const app = express();

/* Init server */

const initServer = (PORT) => {
    try {
        app.listen(PORT);
        return { serverStatut: true };

    } catch {
        return { serverStatut: false };
    };
};

/* Exprtations */

module.exports = {
    app,
    initServer
};