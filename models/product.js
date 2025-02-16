import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
    },

    price: {
        type: Number,
        required: [true,"Price must be provided"],
    },

    featured: {
        type: Boolean,
        default: false
    },

    rating: {
        type: Number,
        default: 4.5,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    company: {
        type: String,
        enum: {
            values: ["apple", "mi", "dell", "samsung"],
            message: `{VALUE} is not suported!`,
        },
    }
});

export default mongoose.model("product", productSchema);
