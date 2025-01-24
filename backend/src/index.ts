import express from "express";
import mongoose from "mongoose";

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

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Smell perfume" });
});
app.use(express.json());

app.post("/create", async (req, res) => {
  console.log(req.body) 
 
});
