import mongoose, { Model, Schema } from "mongoose";
import { IProduct } from "../interfaces";


export const productSchema = new Schema({

    name    : { type: String },
    price   : { type: Number },
    image   : { type: String },
    category: { type: Schema.Types.ObjectId, ref:'Category', require: true },
    inStock : { type: Number },
    
    active  : { type: Boolean, default: true },

},{
    timestamps: true
})


const Product:Model<IProduct> = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product