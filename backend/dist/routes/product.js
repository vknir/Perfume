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
exports.productRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db/db");
const mongoose_1 = __importDefault(require("mongoose"));
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId(req.params.id);
    try {
        const response = yield db_1.PerfumeModel.findById(id);
        if (response)
            res.status(200).json({ response });
        else
            throw "Wrong product id";
    }
    catch (e) {
        res.status(404).json({ messgae: "Product dest not exist" });
    }
}));
productRouter.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose_1.default.Types.ObjectId(req.params.id);
    try {
        const response = yield db_1.PerfumeModel.findById(id);
        if (response) {
            console.log(typeof (req.body.comments));
            const newReview = response.review;
            const newCount = (response.count || 1) + 1;
            const newRating = ((newCount - 1) * (response.rating || 0) + parseFloat(req.body.rating)) / newCount;
            yield db_1.PerfumeModel.findByIdAndUpdate(id, {
                review: newReview,
                count: newCount,
                rating: newRating,
            });
            res.status(200).json("message received");
        }
        else
            throw "Wrong product id";
    }
    catch (e) {
        res.status(404).json({ messgae: "Product dest not exist" });
    }
}));
