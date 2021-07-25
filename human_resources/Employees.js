import { readFileSync } from "fs";

export const findEmployee = (clockID) =>
  JSON.parse(readFileSync("./data/employees.json")).filter((obj) =>
    obj.clock_id === clockID
  ).pop();
