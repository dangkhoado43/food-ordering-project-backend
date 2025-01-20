import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }
})

const Order = mongoose.model("orders", orderSchema)

export default Order
