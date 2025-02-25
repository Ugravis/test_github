/*
    Manipulation pour récupérer l'ip du client
    (Car il est modifié par le serveur)
    req.clientIp

    Note : il est préférable d'utiuliser directement 
    req.headers['x-real-ip'] pour accéder à l'ip, req.ip 
    après sa modification n'est pas stable. 
*/


module.exports = (req, res, next) => {
    
    if(req.headers['x-real-ip']) {
        req.serverIp = req.ip;
        req.ip = req.headers['x-real-ip'];
    };
    
    next();
};