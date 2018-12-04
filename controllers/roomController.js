var Room = require('../models/room');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.room_list = function(req, res, next) {
    Room.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_rooms) {
        if (err) { return next(err)};
        res.render('room_list', { title: 'Rooms', room_list: list_rooms});
    });
};

// Display detail page.
exports.room_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

// Display  create form on GET.
exports.room_create_post = [
(req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        res.render('room_create', { title: 'New Room', author: req.body, errors: errors.array() });
        return;
    }
    else {
        // Data from form is valid.
        // Create an Author object with escaped and trimmed data.
        var room = new Room(
            {
                firstName: req.body.roomNumber,
                lastName: req.body.building,
                address: req.body.capacity,
            });
        room.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to details.
            res.redirect(room.url);
        });
    }
}
];

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