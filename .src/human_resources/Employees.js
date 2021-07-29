/** @format */

import { readFileSync } from "fs";
export const findEmployee = clockID =>
  JSON.parse(readFileSync("../src/data/employees.json"))
    .filter(employee => employee.clock_id === clockID)
    .pop();
