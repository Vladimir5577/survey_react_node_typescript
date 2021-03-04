const { Schema, model } = require('mongoose');

const schema = new Schema({
	name: {
		type: String,
		require: true
	},
	country: {
		type: String,
		require: true
	},
	age: {
		type: String,
		require: true
	},
	question_1: {
		type: String,
		require: true
	},
	question_2: {
		type: String,
		require: true
	},
	question_3: {
		type: String,
		require: true
	},
	question_4: {
		type: String,
		require: true
	},
	question_5: {
		type: String,
		require: true
	},
	question_6: {
		type: String,
		require: true
	},
	question_7: {
		type: String,
		require: true
	},
	date: {
		type: String,
		require: true
	}
});

module.exports = model('Survey', schema);