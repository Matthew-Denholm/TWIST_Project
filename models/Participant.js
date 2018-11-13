var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
    Participant_ID: {type: String, required: true,},
    lastName: {type: String, max: 100},
    firstName: {type: String, max: 100},
    address: {type: String},
    email: {type: String},
    timeStamp: {type: Date.now},
    participantType: {type: String}
  });

// Virtual for participants full name
ParticipantSchema
.virtual('name')
.get(function () {
  return this.lastName + ', ' + this.firstName;
});

// Virtual for Participants URL
ParticipantSchema
.virtual('url')
.get(function () {
  return '/catalog/participant/' + this._id;
});

//Export model
module.exports = mongoose.model('Participant', ParticipantSchema);