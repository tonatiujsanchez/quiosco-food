
import mongoose, { Model, Schema } from 'mongoose'
import { ICategory } from '../interfaces'

export const categorySchema = new Schema({
    icon  : { type: String },
    name  : { type: String },
    active: { type: Boolean, default: true }
},{
    timestamps: true
})


const Category:Model<ICategory> = mongoose.models.Category || mongoose.model('Category', categorySchema)


export default Category