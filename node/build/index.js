"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoose');
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
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
app.listen(config_1.default.server.port, () => {
    logging_1.default.info('SERVER', `Server running on ${config_1.default.server.hostname}:${config_1.default.server.port}`);
});
