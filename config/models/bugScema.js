/**
 * Created by Vlad on 21.05.2017.
 */

var mongoose = require('mongoose');

let BugSchema = mongoose.Schema({

    bugId: {
        type: String
    },

    file_name: {
        type: String
    },

    file_id: {
        type: String
    },

    caption: {
        type: String
    },

    description: {
        type: String
    },

    coordinates: {
        type: Array
    },

    user: {
        type: Object
    },

    date: {
        type: String
    }

});

module.exports = mongoose.model('Bug', BugSchema);
