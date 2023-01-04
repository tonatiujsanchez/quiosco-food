import mongoose, { Model, Schema } from "mongoose";
import { IOrder } from "../interfaces";



export const orderSchema = new Schema({

    name : { type: String },
    total: { type: Number },

    orderProducts: {
        _id     : { type: Schema.Types.ObjectId, ref:'Product', require: true },
        name    : { type: String },
        price   : { type: Number },
        image   : { type: String },
        quantity: { type: Number } 
    },

    delivered: { tyoe: Boolean, default: false }
    
},{
    timestamps: true
})


const Order:Model<IOrder> = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order