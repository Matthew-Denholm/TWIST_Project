var Participant = require('../models/Participant');
var HighSchool = require('../models/HighSchool');

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
exports.participant_create_get = function(req, res, next) {
    res.render('participant_form', { title: 'New Participant'});
};
/*
// handle Create on Post
exports.participant_create_post = [

    // Validate fields.
    body('firstName').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('lastName').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('address').isLength({ min: 1 }).trim().withMassage('No address entered'),
    body('email').isLength({ min: 1 }).trim().withMassage('No email entered'),


    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('address').trim().escape(),
    sanitizeBody('email').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('participant_form', { title: 'New Participant', author: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var participant = new Participant(
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    addres: req.body.addres,
                    email: req.body.email,
                    timestamp: Date

                });
            participant.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to details.
                res.redirect(participant.url);
            });
        }
    }
];
*/

// display delete form on get

// handle delete on post

//display update form on get

//handle update on post