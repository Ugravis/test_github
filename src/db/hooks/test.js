module.exports = (models) => {
    
    /* BeforeCreate */
    
    models.Test.addHook('beforeCreate', async(test) => {

        // CHAMPS tests
        if(test.date===undefined) test.date = Date.now();
    });
};