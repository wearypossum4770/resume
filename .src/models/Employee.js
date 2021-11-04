/** @format */

import mongoose from "mongoose";
import cuid from "cuid";
import { UsersModel, userSchema } from "./User.js";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const employeeSchema = new Schema(
  {
    //  user:{type:ObjectId, ref:"UsersModel"},
    employee_id: {
      type: String,
      requried: true,
      unique: true,
      trim: true,
      minLength: 3,
      default: cuid(),
    },
    date_of_birth: {
      type: Date,
      required: true,
      unique: false,
    },
    // department,
    // position,
    start_date: {
      type: Date,
      required: false,
      unique: false,
    },
    end_date: {
      type: Date,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

export const EmployeeModel = mongoose.model("Employee", employeeSchema);
