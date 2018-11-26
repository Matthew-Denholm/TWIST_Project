var Session = require('../models/Session');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.session_list = function(req, res) {
    Session.find()
    .sort([['sessionNum', 'ascending']])
    .exec(function (err, list_sessions) {
        if (err) { return next(err);}
        res.render('session_list', { title: 'Sessions', session_list: list_sessions});
    });
};

// Display detail page.
exports.session_detail = function(req, res, next) {
    async.parallel({
        session: function(callback) {
            Session.findById(req.params.id)
            .exec(callback)
        },
        function(err, results) {
            if (err) { return next(err);}
            if (results.participant==null) {
                var err = new Error('Participant not found');
                err.status = 404;
                return next(err)
            }
            res.render('session_detail', { title: 'Session Details', session: results.session})
        }
    });
};

// Display  create form on GET.
exports.session_create_get = function(req, res) {
    res.render('session_create', { title: 'New Session'});
};

// Handle  create on POST.
exports.session_create_post = [
	//validate fields
	body('sessionNum').isLength({ min: 1 }).trim().withMessage('An ID is required.').isAlphanumeric().withMessage('ID cannot contain non-alphanumeric characters.'),
	body('sessionName').isLength({min:1}).trim().withMessage('Please specify the name of the session. Identical Names are allowed.').isAlphanumeric().withMessage('Name cannot contain non-alphanumeric characters.'),

	//sanitize
	sanitizeBody('sessionNum').trim().escape(),
    sanitizeBody('sessionName').trim().escape(),

	//processing request
 	function(req, res, next) {
		// Extract the validation errors from a request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) { //If errors exist...
            // Render form again with sanitized values/errors messages.
            res.render('session_form', { title: 'New Session', author: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.
            // Create an Author object with escaped and trimmed data.
            var session = new Session(
                {
                    sessionNum: req.body.sessionNum,
                    sessionName: req.body.sessionName,
                    time: req.body.time
                });
            session.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to details.
                res.redirect(session.url);
            });
        }
	}
];

// Display delete form on GET.
exports.session_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: delete GET');
};

// Handle delete on POST.
exports.session_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: delete POST');
};

// Display update form on GET.
exports.session_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: update GET');
};

// Handle update on POST.
exports.session_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: update POST');
};