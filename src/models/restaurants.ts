import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

const Restaurant = mongoose.model("restaurants", restaurantSchema)

export default Restaurant
