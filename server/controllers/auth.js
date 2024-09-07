import bcrypt from "bcrypt";

import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const {
      userType,
      userFullName,
      admissionId,
      employeeId,
      age,
      dob,
      gender,
      address,
      mobileNumber,
      email,
      password,
      isAdmin,
    } = req.body;

    if (!userType || !userFullName || !email || !password) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      userType,
      userFullName,
      admissionId,
      employeeId,
      age,
      dob,
      gender,
      address,
      mobileNumber,
      email,
      password: hashedPass,
      isAdmin,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error("Error while creating user:", err.message);

    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error.", details: err.errors });
    } else if (err.code === 11000) {
      // Duplicate key error
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    } else {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const login = async (req, res) => {
  try {
    const { admissionId, employeeId, password } = req.body;
    const user = admissionId
      ? await User.findOne({ admissionId })
      : await User.findOne({ employeeId });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please check your credentials." });
    }

    const validPass = bcrypt.compare(password, user.password);
    if (!validPass) {
      return res
        .status(400)
        .json({ message: "Invalid password. Please try again." });
    }

    const { password: _, ...userData } = user._doc;
    return res.status(200).json(userData);
  } catch (err) {
    console.error("Login error:", err.message);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};
