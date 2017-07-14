var Zone = require('../models/Zone')

module.exports = {

     find: function () {
       return 'find Zone'
    },

    findById: function () {
        return 'findById Zone'
    },

    create: function (params, callback) {
        var zips = params['zipCodes']
        var zip = zips.split(',')
        var newZip = []

        zip.forEach(function(zipCode) {
            newZip.push(zipCode.trim())
        });

        params['zipCodes'] = newZip

        return callback(params)

        
    },

    update: function () {
        return 'update Zone'
    },
       

    delete: function () {
        return 'delete Zone'
    }
}