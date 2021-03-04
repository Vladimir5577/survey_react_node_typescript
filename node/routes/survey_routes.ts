import express from 'express';
// const router = require('express').Router(); // another way to declare router
import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const router = express.Router();
const Survey = require('../Models/Survey');

router.get('/get_surveys', async (req: Request, res: Response) => {
	const surveys = await Survey.find({});
	res.send(surveys);
});

router.post('/add_survey', async (req: Request, res: Response) => {
	// console.log(req.body);
	const survey = new Survey({
		name: req.body.name,
		country: req.body.country,
		age: req.body.age,
		question_1: req.body.question_1, 
		question_2: req.body.question_2, 
		question_3: req.body.question_3, 
		question_4: req.body.question_4, 
		question_5: req.body.question_5, 
		question_6: req.body.question_6, 
		question_7: req.body.question_7, 
		date: logging.getTimeStamp()
	});

	await survey.save();

	if (survey) {
		res.json({ surveyCondacted: true, message: 'Survey condacted successfully' });
	}
});

// Get survey by id
router.get('/survey/:id', async (req, res) => {
	// console.log(req.params);
	const survey = await Survey.findById(req.params.id);
	// console.log(survey);
	res.send(survey);
});


module.exports = router;