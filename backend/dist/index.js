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
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const db_1 = require("./db/db");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // port if not available use port 3000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(config_1.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    });
}
main();
app.use((0, cors_1.default)());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPerfume = yield db_1.PerfumeModel.find();
    res.status(200).json({ allPerfume });
}));
app.use(express_1.default.json());
app.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, size, count, rating, review, primary_img, alt_img, } = req.body;
    try {
        const response = yield db_1.PerfumeModel.create({
            name,
            description,
            price,
            primary_img,
            count,
            size,
            rating,
            review,
            alt_img,
        });
        res.status(200).json({ message: "data inserted successfully" });
    }
    catch (e) {
        res.status(500).json({ message: "unable to update" });
    }
}));
