var Presenter = require('../models/Presenter');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list.
exports.presenter_list = function(req, res, next) {
    Presenter.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_presenters) {
        if (err) {return next(err)};
        res.render('presenter_list', {title: 'Presenters', presenter_list: list_presenters});
    });
};

// Display detail page.
exports.presenter_detail = function(req, res, next) {
    Presenter.findById(req.params.id)
    .exec(function(err, results){
        if (err) {return next(err);}
            if (results==null){
                var err = new Error('Presenter not found');
                err.status = 404;
                return next(err)
            }
        res.render('presenter_detail', {
            title: 'Presenter Details',
            presenter: results,
        })
    })  
};


// Display  create form on GET.
exports.presenter_create_get = function(req, res) {
    res.render('presenter_create', {
        title: 'New Presenter'
    });
};

// Handle  create on POST.
exports.presenter_create_post = [
    
    body('firstName').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('lastName').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('occupation').trim(),
    body('mainPhone').isLength({ min: 1 }).trim().withMessage('no phone number entered'),
    body('mobilePhone').trim(),
    body('email').isLength({ min: 1 }).trim().withMessage('no email entered'),

    sanitizeBody('firstname').trim().escape(),
    sanitizeBody('lastname').trim().escape(),
    sanitizeBody('occupation').trim(),
    sanitizeBody('mainPhone').trim().escape(),
    sanitizeBody('mobilePhone').trim(),
    sanitizeBody('email').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render( 'Presenter_create', {
                title: 'New Presenter',
                presenter: req.body, errors: errors.array()
            });
            return;
        }
        else {
            var presenter = new Presenter({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                occupation: req.body.occupation,
                mainPhone: req.body.mainPhone,
                mobilePhone: req.body.mobilePhone,
                email: req.body.email
            });
            presenter.save(function (err) {
                if (err) { return next(err)}
                res.redirect(presenter.url);
            })
        }
    }
];

exports.presenter_delete_get = function(req, res, next) {
	
    Presenter.findById(req.params.id).exec(function(err, results) {
        if (err) { return next(err); }
        if (results==null) { res.redirect('/catalog/presenter'); }
        res.render('presenter_delete', { title: 'Delete presenter', presenter: results})
    });
};
// Handle delete on POST.
exports.presenter_delete_post = function(req, res) {
    Presenter.findByIdAndDelete(req.params.id, function deletePresenter(err){
        if (err) return next(err)
        res.redirect('/catalog/presenters');
    });
};

// Display update form on GET.
exports.presenter_update_get = function(req, res, next) {
    Presenter.findById(req.params.id, function (err, presenter){
        if(err){return next(err);}
        if(presenter == null) {
            res.redirect('/catalog/presenters/')
        }
        res.render('presenter_update', { 
            title: 'Update Presenter',
            presenter: presenter, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            occupation: req.body.occupation,
            mainPhone: req.body.mainPhone,
            mobilePhone: req.body.mobilePhone,
            email: req.body.email
        });
    });
};

// Handle update on POST.
exports.presenter_update_post = [

    body('firstName').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('lastName').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('occupation').trim(),
    body('mainPhone').isLength({ min: 1 }).trim().withMessage('no phone number entered'),
    body('mobilePhone').trim(),
    body('email').isLength({ min: 1 }).trim().withMessage('no email entered'),

    sanitizeBody('firstname').trim().escape(),
    sanitizeBody('lastname').trim().escape(),
    sanitizeBody('occupation').trim(),
    sanitizeBody('mainPhone').trim().escape(),
    sanitizeBody('mobilePhone').trim(),
    sanitizeBody('email').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('presenter_update', { 
                title: 'Update presenter', 
                _id: presenter._id, 
                presenter: presenter, 
                errors: errors.array()});
            return;
        }
        else {
            var presenter = new Presenter({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                occupation: req.body.occupation,
                mainPhone: req.body.mainPhone,
                mobilePhone: req.body.mobilePhone,
                email: req.body.email,
                _id:req.params.id
            });
            Presenter.findByIdAndUpdate(req.params.id, presenter, {}, function (err, thepresenter) {
                if (err) {return next(err);}
                res.redirect(thepresenter.url);
            });
        }
    }
];
