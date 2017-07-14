var Comment = require('../models/Comment')

module.exports = {

    find: function () {
       return 'find comment'
    },

    findById: function () {
        return 'findById comment'
    },

    create: function () {
        return 'create comment'
    },

    update: function () {
        return 'update comment'
    },
       

    delete: function () {
        return 'delete comment'
    }
}