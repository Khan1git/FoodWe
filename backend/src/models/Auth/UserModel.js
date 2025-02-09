import mongoose from "mongoose";

const UserModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", UserModel);
export default User;
