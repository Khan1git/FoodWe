import bcrypt from "bcryptjs";
import User from "../../models/Auth/UserModel.js";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password, code } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = code === process.env.ADMIN_SECRET_CODE ? "admin" : "user";

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      user: { name, email, role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isAdmin = (await user.code) === process.env.ADMIN_SECRET_CODE;

    const token = jwt.sign(
      { userId: user._id, isAdmin, email: user.email, },
      process.env.JWT_SECRET,
      { expiresIn: "1D" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: user,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const check = async (req, res) => {
  res.status(200).json({ message: "Checking - Admin Access Granted" });
};
