import { Router } from "express";
import { PerfumeModel } from "../db/db";
import mongoose from "mongoose";

const productRouter = Router();

productRouter.get("/:id", async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const response = await PerfumeModel.findById(id);
    if (response) res.status(200).json({response });
    else throw "Wrong product id";
  } catch (e) {
    res.status(404).json({ messgae: "Product dest not exist" });
  }
});

productRouter.post("/:id", (req, res) => {});

export { productRouter };
