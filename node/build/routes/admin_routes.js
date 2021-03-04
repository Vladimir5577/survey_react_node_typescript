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
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logging_1 = __importDefault(require("../config/logging"));
const router = express_1.default.Router();
const Admin = require('../Models/Admin');
// Admin seeder (add admin)
router.get('/admin_seeder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adminEmail = 'admin@admin.com';
    const adminPassword = '123';
    // Check if the admin exist in the database
    const adminExist = yield Admin.findOne({ adminEmail: adminEmail });
    if (adminExist) {
        return res.json({ message: 'Admin already exist in the database' });
    }
    // Hash password
    const salt = yield bcrypt.genSalt(10);
    const hashPassword = yield bcrypt.hash(adminPassword, salt);
    const admin = new Admin({
        adminEmail: adminEmail,
        adminPassword: hashPassword,
        date: logging_1.default.getTimeStamp()
    });
    yield admin.save();
    res.json({ message: 'Admin saved successfully' });
}));
// Login Admin
router.post('/admin_login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    // Check if admin exist
    const admin = yield Admin.findOne({ adminEmail: req.body.adminEmail });
    if (!admin)
        return res.send({ errorMessage: 'Admin not found' });
    // Verify password
    const validPassword = yield bcrypt.compare(req.body.adminPassword, admin.adminPassword);
    if (!validPassword)
        return res.send({ errorMessage: 'Wrong password' });
    // Create and assign token
    const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET);
    res.send({ auth: true, token: token, message: 'You are logged in !' });
}));
// Verify token
router.get('/verify_token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.send({ auth: false, message: 'Prease give a token' });
    }
    const ver = jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
        if (err) {
            res.send({ auth: false, message: 'You failed to authenticate !' });
        }
        else {
            res.send({ auth: true, message: 'You are authenticated !' });
        }
    });
}));
module.exports = router;
