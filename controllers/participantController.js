var Participant = require('../models/participant');
var HighSchool = require('../models/highschool');

// Display all.
exports.participant_list = function(req, res, next) {
    Participant.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_participants) {
        if (err) { return next(err);}
        res.render('participant_list', { title: 'Participants', participant_list: list_participants});
    });
};

// Display details
exports.participant_detail = function(req, res, next) {
    async.parallel({
        participant: function(callback) {
            Participant.findById(req.params.id)
            .exec(callback)
        },
        //display participants topics
        participant_topic: function(callback) {
            Topic.find({ 'participant': req.params.id}, 'topic summary')
            .exec(callback)
        },
        function(err, results) {
            if (err) { return next(err);}
            if (results.participant==null) {
                var err = new Error('Participant not found');
                err.status = 404;
                return next(err)
            }
            res.render('participant_detail', { title: 'Participant Details', participant: results.participant, participant_topic: results.participant_topic})
        }
    });
;}

// Display Create form on Get

// handle Create on Post

// display delete form on get

// handle delete on post

//display update form on get

//handle update on post