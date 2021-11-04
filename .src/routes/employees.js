/** @format */

import { Router } from "express";
import { EmployeeModel } from "../models/Employee.js";
const employeeRouter = Router();
employeeRouter.route("/").get((req, res) => {
  EmployeeModel.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json(`ERROR:${err}`));
});
employeeRouter.route("/add").post((req, res) => {
  console.log(req.body);
  const { employee_id, date_of_birth, start_date } = req.body;
  const newUser = new EmployeeModel({
    employee_id: employee_id,
    date_of_birth: Date.parse(date_of_birth),
    start_date: start_date,
  });
  newUser
    .save()
    .then(() => res.json("Employee Added!"))
    .catch((err) => res.status(400).json(`Error:${err}`));
});
export default employeeRouter;
function clock_in(employeeID) {}
function clock_out(employeeID) {}
function break_in(employeeID) {}
function break_out(employeeID) {}
function lunch_in(employeeID) {}
function lunch_out(employeeID) {}
