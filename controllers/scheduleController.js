var Schedule = require('../models/Schedule');
var async = require('async');
var Topic = require('../models/Topic');
var Session = require('../models/Session');
var Room = require('../models/Room');
var Presenter = require('../models/Presenter');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.schedule_list = function(req, res) {
	Schedule.find()
    .sort([['Capacity', 'ascending']])
    .exec(function (err, list_sessions) {
        if (err) { return next(err);}
        res.render('schedule', { title: 'Current Schedule', schedule_list: list_sessions});
    });
};

// Display detail page.
exports.schedule_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

// Display  create form on GET.
exports.schedule_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: create GET');
};

// Handle  create on POST.
exports.schedule_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: create POST');
};

// Display delete form on GET.
exports.schedule_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: delete GET');
};

// Handle delete on POST.
exports.schedule_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: delete POST');
};

// Display update form on GET.
exports.schedule_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: update GET');
};

// Handle update on POST.
exports.schedule_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: update POST');
};