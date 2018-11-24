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
exports.session_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

// Display  create form on GET.
exports.session_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: create GET');
};

// Handle  create on POST.
exports.session_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: create POST');
};

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