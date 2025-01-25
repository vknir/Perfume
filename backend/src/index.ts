import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

import { MONGO_URL } from "./config/config";
import { PerfumeModel } from "./db/db";

const app = express();
const port = process.env.PORT || 3000; // port if not available use port 3000;

async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();

app.use(cors())

app.get("/", async (req, res) => {
  const allPerfume = await PerfumeModel.find();
  res.status(200).json({  allPerfume });
});
app.use(express.json());

app.post("/create", async (req, res) => {
  const {
    name,
    description,
    price,
    size,
    count,
    rating,
    review,
    primary_img,
    alt_img,
  } = req.body;
  try {
    const response = await PerfumeModel.create({
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
  } catch (e) {
    res.status(500).json({ message: "unable to update" });
  }
});
