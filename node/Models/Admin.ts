// const { Schema, model } = require('mongoose'); // not working
import mongoose, { Schema } from 'mongoose';

const schema: Schema = new Schema({
	adminEmail: {
		type: String,
		require: true
	},
	adminPassword: {
		type: String,
		require: true
	},
	date: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('Admin', schema);
