import { Router } from "express";
import { PerfumeModel } from "../db/db";
import mongoose from "mongoose";

const productRouter = Router();

//get route to get info about the product based on id

productRouter.get("/:id", async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const response = await PerfumeModel.findById(id);
    if (response) res.status(200).json({ response });
    else throw "Wrong product id";
  } catch (e) {
    res.status(404).json({ messgae: "Product dest not exist" });
  }
});

//post route to post reviews about the product based on id
productRouter.post("/:id", async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const response = await PerfumeModel.findById(id);
    if (response) {
      console.log(typeof(req.body.comments));
      
      const newReview = response.review
      
      const newCount = (response.count || 1) + 1;
      const newRating =
        ((newCount - 1) * (response.rating || 0) + parseFloat( req.body.rating)) / newCount;
      await PerfumeModel.findByIdAndUpdate(id, {
        review: newReview,
        count: newCount,
        rating: newRating,
      });
      res.status(200).json("message received");
    } else throw "Wrong product id";
  } catch (e) {
    res.status(404).json({ messgae: "Product dest not exist" });
  }
});

export { productRouter };
