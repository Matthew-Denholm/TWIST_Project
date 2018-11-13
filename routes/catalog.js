var express = require('express');
var router = express.Router();
//var School = require('../controllers/HighSchool');
var Participant = require('../controllers/participantController');
var Presenter = require('../controllers/presenterController');
//var Room = require('../controllers/Room');
var Schedule = require('../controllers/scheduleController');
//var Session = require('../controllers/Session');
var Topic = require('../controllers/topicController');

//router.get('/', Participant.index); //landing page

//Participant Routes
///////////////////////////////////////////////
router.get('/Participant', Participant.participant_list);

router.get('/Participant/:id', Participant.participant_detail);

router.get('/Participant/create', Participant.participant_create_get);

router.post('/Participant/create', Participant.participant_create_post);

router.get('/Participant/update',Participant.participant_update_get);

router.post('/Participant/update',Participant.participant_update_post);

router.get('/Participant/delete',Participant.participant_delete_get);

router.post('/Participant/delete',Participant.participant_delete_post);

//Presenter Routes
///////////////////////////////////////////////

router.get('/Presenter/create', Presenter.presenter_create_get);

router.post('/Presenter/create', Presenter.presenter_create_post);

router.get('/Presenter/update',Presenter.presenter_update_get);

router.post('/Presenter/update',Presenter.presenter_update_post);

router.get('/Presenter/delete',Presenter.presenter_delete_get);

router.post('/Presenter/delete',Presenter.presenter_delete_post);

//Schedule Routes
///////////////////////////////////////////////

//router.get('/Schedule/create', Schedule.schedule_create_get);

//router.post('/Schedule/create', Schedule.schedule_create_post);

//router.get('/Schedule/update',Schedule.schedule_update_get);

//router.post('/Schedule/update',Schedule.schedule_update_post);

//router.get('/Schedule/delete',Schedule.schedule_delete_get);

//router.post('/Schedule/delete',Schedule.schedule_delete_post);

//Topic Routes
///////////////////////////////////////////////

//router.get('/Topic/create', Topic.topic_create_get);

//router.post('/Topic/create', Topic.topic_create_post);

//router.get('/Topic/update',Topic.topic_update_get);

//router.post('/Topic/update',Topic.topic_update_post);

//router.get('/Topic/delete',Topic.topic_delete_get);

//router.post('/Topic/delete',Topic.topic_delete_post);

/////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;
