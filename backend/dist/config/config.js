"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URL = void 0;
require("dotenv/config");
const MONGO_URL = process.env.MONGO_URL || ""; // default empty string to avoid type error
exports.MONGO_URL = MONGO_URL;
