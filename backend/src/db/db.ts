import mongoose, {Schema} from "mongoose";

// Schema maps to MongoDB collection, defines shape of documents within this collection

const PerfumeSchema = new Schema({
    name:String,
    price:[Number],
    description:String,
    primary_img:String,
    alt_img: [String],
    review:[String],
    rating:Number,
    count:Number,
    size:[Number]
})


// to create documents in MongoDB. 
const PerfumeModel = mongoose.model('perfume', PerfumeSchema)

export {PerfumeModel}