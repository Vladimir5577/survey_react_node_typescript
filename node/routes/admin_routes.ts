import express from 'express';
import { Request, Response, NextFunction } from 'express';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

import logging from '../config/logging';

const router = express.Router();
const Admin = require('../Models/Admin');

// Admin seeder (add admin)
router.get('/admin_seeder', async (req: Request, res: Response) => {

	const adminEmail = 'admin@admin.com';
	const adminPassword = '123';
	
	// Check if the admin exist in the database
	const adminExist = await Admin.findOne({ adminEmail: adminEmail });
	if (adminExist) {
		return res.json({ message: 'Admin already exist in the database' });
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(adminPassword, salt);

	const admin = new Admin({
		adminEmail: adminEmail,
		adminPassword: hashPassword,
		date: logging.getTimeStamp()
	});

	await admin.save();

	res.json({ message: 'Admin saved successfully' });

});

// Login Admin
router.post('/admin_login', async (req, res) => {
	console.log(req.body);
	// Check if admin exist
	const admin = await Admin.findOne({ adminEmail: req.body.adminEmail });
	if (!admin) return res.send({ errorMessage: 'Admin not found' });

	// Verify password
	const validPassword = await bcrypt.compare(req.body.adminPassword, admin.adminPassword);
	if (!validPassword) return res.send({ errorMessage: 'Wrong password' });

	// Create and assign token
	const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET);
	res.send({ auth: true, token: token, message: 'You are logged in !' });
});

// Verify token
router.get('/verify_token', async (req, res) => {
	const token = req.headers['x-access-token'];
	if (!token) {
		res.send({ auth: false, message: 'Prease give a token' });
	}
	const ver = jwt.verify(token, process.env.TOKEN_SECRET, (err: any, decode: any) => {
		if (err) {
			res.send({ auth: false, message: 'You failed to authenticate !' });
		} else {
			res.send({ auth: true, message: 'You are authenticated !' });
		}
	});
});



module.exports = router;