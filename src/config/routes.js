module.exports = {
    
    LOGS: {
        POST: {
            name: `log`,
            method: 'POST',
            operationName: 'createLog',
            params: [],
            queries: [],
            basePath: '/logs',
            path: function() { return `${this.basePath}${this.params.length>0?`/:${this.params.join('/:')}`:''}` },
            perms: false
        }
    }
}