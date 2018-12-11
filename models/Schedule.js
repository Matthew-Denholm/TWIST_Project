var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
    session: {type: Schema.Types.ObjectId, ref: 'Session', required: true}, // FROM SESSION MODEL
    room: {type: Schema.Types.ObjectId, ref: 'Room', required: true }, // FROM ROOM MODEL
    topic: {type: Schema.Types.ObjectId, ref: 'Topic', required: true },  // FROM TOPIC MODEL
    presenter: {type: Schema.Types.ObjectId, ref: 'Presenter', required: true }, // FROM PRESENTER MODEL
	maxSize: {type: Number, required: true}, //the maximum number of participants that can be placed in each session on the schedule.
});

// virtual for url
ScheduleSchema
.virtual('url')
.get(function() {
    return '/catalog/schedule/' + this._id;
});

//export
module.exports = mongoose.model('Schedule', ScheduleSchema);