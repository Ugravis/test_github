const dotenv = require('dotenv');
dotenv.config();

// Libraries
const bodyParser          = require('body-parser');
const cors                = require('cors');
const cookieParser        = require('cookie-parser');
const colors              = require('colors');
// Systems
const { app, initServer } = require('./src/web/webIndex.js');
const { launchLog }       = require('./src/utils/functions/launchLog.js');
const routesHandler       = require('./src/web/handlers/routesHandler.js');
const db                  = require('./src/db/dbIndex.js');
// Middlewares
const init                = require('./src/web/middlewares/init.js');
const manageClientId      = require('./src/web/middlewares/manageClientId.js');
const updateClientIp      = require('./src/web/middlewares/updateClientIp.js');
const createLog           = require('./src/web/middlewares/createLog.js');

(async () => {
/* Declarations initiales */


    const PORT           = process.env.PORT||3000;
    const startDate      = Date.now();
    const allowedOrigins = process.env.NODE_ENV==='development' ? ['http://localhost:5174', 'http://localhost:5173'] : [];

    console.log(`starting process ...`.bgBlack.yellow);


/* Middlewares */

    app.use(init);

    app.use(bodyParser.json());
    app.use(cors({ origin: allowedOrigins, credentials: true }));
    app.use(cookieParser());

    app.use(manageClientId);
    app.use(updateClientIp);
    app.use(createLog);


/* Initialisations */


    // Server
    const serverInit = initServer(PORT);
    // Routes
    serverInit.routeCount = routesHandler(app);
    // Data base
    const dbInit = await db.initDb();
    // Launch log
    launchLog(PORT, startDate, serverInit, dbInit);
})();