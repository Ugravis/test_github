const { models }                = require('../../db/dbIndex');
const axios                     = require('axios');
const moment                    = require('moment');


/*
    Génération du log de la requête
    Dans models.Log
*/


module.exports = async (req, res, next) => { 

    if(req.headers&&req.headers.needlog==='false') return next(); 


/* Declarations initales */ 


    const typeRegex = /\/([^/]+)(?:\/|$)/;
    let   type; if(req.url) { const match = req.url.match(typeRegex); type=match&&match[1]?match[1]:'unknow'; } else { type='unknow' };
    let   userAgent;
    req.headers?userAgent=req.headers['user-agent']:userAgent=false;

    // Obtention du type si directement définit
    if(req.body && req.body.logType) type = req.body.logType;

    // Fonction : créer le log
    const createLog = async () => {
        return await models.Log.create(logData);
    };


/* Logs définis avant la route */ 


    // Variables req directes
    const logData = {
        type:      type,
        user_id:   req.user?req.user.id:0,
        client_id: req.clientId?req.clientId:0,
        client_ip: process.env.NODE_ENV==='development'?'151.101.0.81':req.headers['x-real-ip']?req.headers['x-real-ip']:'unknow',
        method:    req.method?req.method:'unknow',
        api_url:   req.url?req.url:'unknow',
    };

    // Variables req.header['userAgent']
    if(userAgent) {
        logData.front_url = req.body&&req.body.url?req.body.url:req.headers.fronturl?req.headers.fronturl:'unknow';
        logData.nav       = userAgent.split(' ').slice(userAgent.split(' ').length-2, userAgent.split(' ').length).join(' ');
        logData.os        = userAgent.split('(')[1].split(')')[0];
        logData.languages = req.headers['accepted-language']?req.headers['accepted-language']:'unknow';
    };

    // Variables GeoJs
    if(req.ip!=='LOCALSERVER') { 
        try {
            geojs = await axios.get(`https://get.geojs.io/v1/ip/geo/${logData.client_ip}.json`);
            if(geojs.status===200 || geojs.data) {
                logData.country_code = geojs.data.country_code;
                logData.region       = geojs.data.region;
                logData.city         = geojs.data.city;
                logData.latitude     = geojs.data.latitude;
                logData.longitude    = geojs.data.longitude;
                logData.accuracy     = geojs.data.accuracy;
                logData.timezone     = geojs.data.timezone;
                logData.organization = geojs.data.organization;
            };

        } catch(err) { console.log('geojs error') }; 
    };


/* Opérations pour la suite des logs */


    const logCountFromThisClient = await models.Log.count({ where: { client_id: req.clientId } });
    const clientsCount           = (await models.Log.count({ group: ['client_id'] })).length;


/* Enregistrement après la route */


    res.on("finish", function async() {

        // Elements accessibles après la route
        logData.ref_id = req.refId?req.refId:'unknow';
        logData.request_time = Date.now() - req.startDate;
        
        // Creation du log BDD, Discord, console
        createLog().then((log) => {
            if(logCountFromThisClient===0) {
                // zouzoualprojectClient.emit('newClient', { clientsCount: clientsCount+1, newLog: log.dataValues, req });
                console.log(`New unique client`.bgGreen+` | `+`from ${log.dataValues.country_code}`.bgBlack+` | `+`${moment(req.startDate).format(`DD/MM/YY, hh:mm:ss`)}`.bgBlack+` | client id ${req.clientId}`)
            };
            next();
        });
    });

    next();
};