/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const userSchema = new Schema(
  {
    username: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    first_name: {
      type: String,
      requried: true,
      unique: false,
      trim: true,
      minLength: 3,
    },
    middle_name: {
      type: String,
      requried: false,
      unique: false,
      trim: true,
      minLength: 3,
    },
    last_name: {
      type: String,
      requried: true,
      unique: false,
      trim: true,
      minLength: 3,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    phone_number: {
      type: String,
      requried: false,
      unique: false,
      trim: true,
      minLength: 3,
    },
  },
  {
    timestamps: true,
  },
);

export const UsersModel = mongoose.model("User", userSchema);
