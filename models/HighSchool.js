var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HighSchoolSchema = new Schema({
    hs_id: {type: String, required: true,},
    hsName: {type: String, }
});

// virtual for url
HighSchoolSchema
.virtual('url')
.get(function() {
    return '/catalog/highschool/' + this._id;
});

//export
module.exports = mongoose.model('HighSchool', HighSchoolSchema);