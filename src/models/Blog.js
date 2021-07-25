/** @format */

import { Schema, ObjectId, Date, String } from "mongoose";

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});
