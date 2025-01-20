import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
