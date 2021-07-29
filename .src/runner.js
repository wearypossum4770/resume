/** @format */
// https://dev.to/dhaiwat10/understanding-react-testing-library-406e
// https://blog.logrocket.com/adding-dynamic-meta-tags-react-app-without-ssr/
function createDB({ database_name = "tax_filer" }) {}
function insertOne(document) {}
function insertMany(documents) {}
function findMany(documents) {}
function findOne(document) {}
const isCloseTo = x => Number.parseFloat(x).toFixed(2).toString();
const mintuesToHours = minutes => Math.floor(minutes / 60);
import TimeSheet, { findTimeSheet } from "./payroll/TimeSheet.js";
import { findEmployee } from "./human_resources/Employees.js";
import WagesAndSalaries from "./payroll/WagesAndSalaries.js";
import { processPayroll } from "./payroll/Payroll.js";
let [
  carl_a_springs,
  sue_t_wiegand,
  john_b_oneil,
  marie_s_bass,
  cheryl_crowson,
] = [403, 409, 412, 413, 418].map(_id => findEmployee(_id));
let timesheetObject = {
  carl_a_springs_timesheet: new TimeSheet(),
  sue_t_wiegand_timesheet: new TimeSheet(),
  john_b_oneil_timesheet: new TimeSheet(),
  marie_s_bass_timesheet: new TimeSheet(),
  cheryl_crowson_timesheet: new TimeSheet(),
};
let processed = [
  "carl_a_springs",
  "sue_t_wiegand",
  "john_b_oneil",
  "marie_s_bass",
  "cheryl_crowson",
].map(employee =>
  findTimeSheet(employee).map(
    obj => (timesheetObject[`${employee}_timesheet`].timesheets = obj),
  ),
);
let {
  carl_a_springs_timesheet,
  sue_t_wiegand_timesheet,
  john_b_oneil_timesheet,
  marie_s_bass_timesheet,
  cheryl_crowson_timesheet,
} = timesheetObject;

let carl_a_springs_wage = processPayroll(
    carl_a_springs_timesheet,
    carl_a_springs,
    WagesAndSalaries,
  ),
  sue_t_wiegand_wage = processPayroll(
    sue_t_wiegand_timesheet,
    sue_t_wiegand,
    WagesAndSalaries,
  ),
  john_b_oneil_wage = processPayroll(
    john_b_oneil_timesheet,
    john_b_oneil,
    WagesAndSalaries,
  ),
  marie_s_bass_wage = processPayroll(
    marie_s_bass_timesheet,
    marie_s_bass,
    WagesAndSalaries,
  ),
  cheryl_crowson_wage = processPayroll(
    cheryl_crowson_timesheet,
    cheryl_crowson,
    WagesAndSalaries,
  );
console.log(
  mintuesToHours(carl_a_springs_wage.total_time) === 40,
  isCloseTo(carl_a_springs_wage.gross_wages) === "430.01",
);
console.log(
  mintuesToHours(sue_t_wiegand_wage.total_time) === 42,
  isCloseTo(sue_t_wiegand_wage.gross_wages) === "451.51",
);
console.log(
  mintuesToHours(john_b_oneil_wage.total_time) === 38,
  isCloseTo(john_b_oneil_wage.gross_wages) === "421.81",
);
console.log(
  mintuesToHours(marie_s_bass_wage.total_time) === 44,
  isCloseTo(marie_s_bass_wage.gross_wages) === "496.81",
);
console.log(
  mintuesToHours(cheryl_crowson_wage.total_time) === 40,
  isCloseTo(cheryl_crowson_wage.gross_wages) === "990.38",
);
