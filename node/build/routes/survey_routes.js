"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("../config/logging"));
const router = express_1.default.Router();
const Survey = require('../Models/Survey');
router.get('/get_surveys', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const surveys = yield Survey.find({});
    res.send(surveys);
}));
router.post('/add_survey', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        date: logging_1.default.getTimeStamp()
    });
    yield survey.save();
    if (survey) {
        res.json({ surveyCondacted: true, message: 'Survey condacted successfully' });
    }
}));
// Get survey by id
router.get('/survey/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.params);
    const survey = yield Survey.findById(req.params.id);
    // console.log(survey);
    res.send(survey);
}));
module.exports = router;
