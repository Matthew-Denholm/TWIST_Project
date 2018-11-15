var HighSchool = require('../models/highschool');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.highschool_list = function(req, res) {
    res.send('NOT IMPLEMENTED: list');
};

// Display detail page.
exports.highschool_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

// Display  create form on GET.
exports.highschool_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: create GET');
};

// Handle  create on POST.
exports.highschool_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: create POST');
};

// Display delete form on GET.
exports.highschool_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: delete GET');
};

// Handle delete on POST.
exports.highschool_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: delete POST');
};

// Display update form on GET.
exports.highschool_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: update GET');
};

// Handle update on POST.
exports.highschool_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: update POST');
};