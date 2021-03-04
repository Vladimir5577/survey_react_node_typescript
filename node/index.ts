const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoose');

import logging from './config/logging';
import config from './config/config'

const app = express();
app.use(cors());
app.use(express.json());

/*
// Rules of our API 
// Instead of cors library we can use this middleware
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Reqested, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }

  next();
});
*/

// Router
const surveyRouter = require('./routes/survey_routes');
const adminRouter = require('./routes/admin_routes');

app.use('/survey', surveyRouter);
app.use('/admin', adminRouter);

app.listen(config.server.port, () => {
	logging.info(
		'SERVER',
		`Server running on ${config.server.hostname}:${config.server.port}`
	);
});