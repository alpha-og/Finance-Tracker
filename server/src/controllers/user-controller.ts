import { Request, Response } from "express";
import User from "../models/user-model";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    let message = "Some error occurred while fetching user";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    let message = "Some error occurred while creating user";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true },
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    let message = "Some error occurred while deleting user";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ message });
  }
};
