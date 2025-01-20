import { Response } from "express";
import { ICreateCurrentUserRequest, IGetCurrentUserRequest, IUpdateCurrentUserRequest } from "../definitions/requestTypes";
import User from "../models/users";

const getCurrentUser = async (req: IGetCurrentUserRequest, res: Response): Promise<any> => {
  try {
    const user = await User.findOne({ _id: req.userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const createCurrentUser = async (req: ICreateCurrentUserRequest, res: Response): Promise<any> => {
  try {
    const { auth0Id, email, username } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const existedUser = await User.findOne({ auth0Id });

    if (existedUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      message: "Created user successfully!",
      data: { id: newUser._id },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error when creating user" });
  }
};

const updateCurrentUser = async (req: IUpdateCurrentUserRequest, res: Response): Promise<any> => {
  try {
    const { fullName, address, city, country } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.fullName = fullName;
    user.address = address;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error when updating user" });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};
