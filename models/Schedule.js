var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
    sessionNum: {type: String, required: true,}, // FROM SESSION MODEL
    roomNum: {type: String, required: true,}, // FROM ROOM MODEL
    topicCode: {type: String, },  // FROM TOPIC MODEL
    presenter_id: {type: String, }, // FROM PRESENTER MODEL
});

// virtual for url
ScheduleSchema
.virtual('url')
.get(function() {
    return '/catalog/schedule/' + this._id;
});

//export
module.exports = mongoose.model('Schedule', ScheduleSchema);