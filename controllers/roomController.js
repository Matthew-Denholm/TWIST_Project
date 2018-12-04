var Room = require('../models/room');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.room_list = function(req, res, next) {
    Room.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_rooms) {
        if (err) { return next(err)};
        res.render('room_list', { title: 'rooms', room_list: list_rooms});
    });
};

// Display detail page.
exports.room_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

// Display  create form on GET.
exports.room_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: create GET');
};

// Handle  create on POST.
exports.room_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: create POST');
};

// Display delete form on GET.
exports.room_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: delete GET');
};

// Handle delete on POST.
exports.room_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: delete POST');
};

// Display update form on GET.
exports.room_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: update GET');
};

// Handle update on POST.
exports.room_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: update POST');
};