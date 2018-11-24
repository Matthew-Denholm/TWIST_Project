var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    sessionNum: {type: String, required: true,},
    time: {type: Date, default: Date.now},
});

// virtual for url
SessionSchema
.virtual('url')
.get(function() {
    return '/catalog/session/' + this._id;
});

//export
module.exports = mongoose.model('Session', SessionSchema);