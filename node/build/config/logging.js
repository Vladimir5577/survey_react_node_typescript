"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message) => {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
};
exports.default = { getTimeStamp, info };
