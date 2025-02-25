/*
    Initialisation des données nécessaires
    Tout 1er middleware
*/


module.exports = (req, res, next) => {
    
    // Start date
    req.startDate = Date.now();
    
    next();
};