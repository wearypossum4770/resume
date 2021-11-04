/** @format */

import { Router } from "express";
import { UsersModel } from "../models/User.js";
const userRouter = Router();
userRouter.route("/").get((req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`ERROR:${err}`));
});
userRouter.route("/:id").get((req, res) => {
  UsersModel.findById(req.params.id)
    .then((user) => {
      let { first_name, last_name, email, username, phone_number } = user;
      let _user = {
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
      };
      res.json(_user);
    })
    .catch((err) => res.status(400).json(`Error:${err}`));
});
userRouter.route("/update/:id").post((req, res) => {
  let { first_name, last_name, email, phone_number } = req.body;
  UsersModel.findById(req.params.id).then((user) => {
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.phone_numbe = phone_number;
    user
      .save()
      .then(() => res.json("User updated"))
      .catch((err) => res.status(400).json(`Error:${err}`));
  });
});
userRouter.route("/add").post((req, res) => {
  const {
    username,
    first_name,
    middle_name,
    last_name,
    email,
    phone_number,
  } = req.body;
  const newUser = new UsersModel({
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
export default userRouter;
