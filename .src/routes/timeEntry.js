/** @format */

import { Router } from "express";
import { TimeEntryModel } from "../models/TimeEntry.js";
const timeEntry = Router();
timeEntry.route("/").get((req, res) => {
  TimeEntryModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`ERROR:${err}`));
});
timeEntry.route("/update/:id").post((req, res) => {});
timeEntry.route("/add").post((req, res) => {
  const {
    username,
    first_name,
    middle_name,
    last_name,
    email,
    phone_number,
  } = req.body;
  const newUser = new TimeEntryModel({
    username,
    first_name,
    middle_name,
    last_name,
    email,
    phone_number,
  });
  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json(`Error:${err}`));
});
export default timeEntry;
