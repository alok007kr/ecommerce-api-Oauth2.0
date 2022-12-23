import mongoose from 'mongoose'
import { APP_URL } from '../config';
const Schema = mongoose.Schema;



const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
    image: {type: String, required: true, get: (image) => {
        //here in image we will get /uploads/6435653567-744.png.
        //But we want to get the complete path like https://ocalhost:5000/uploads/2462796-87346.png

        return `${APP_URL}/${image}`;
    }}
},{timestamps: true, toJSON: {getters: true}, id: false})

export default mongoose.model('Product', productSchema, 'products')