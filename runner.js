import TimeSheet, { findTimeSheet } from "./payroll/TimeSheet.js";
import { findEmployee } from "./human_resources/Employees.js";
import WagesAndSalaries from "./payroll/WagesAndSalaries.js";
import { processPayroll } from "./payroll/Payroll.js";
// https://simpleisbetterthancomplex.com/2015/12/07/working-with-django-view-decorators.html
// https://dev.to/dhaiwat10/understanding-react-testing-library-406e
// https://blog.logrocket.com/adding-dynamic-meta-tags-react-app-without-ssr/
// https://dev.to/patheticgeek/react-hooks-on-steroids-48l3
function createDB({ database_name = "tax_filer" }) {}
function insertOne(document) {}
function insertMany(documents) {}
function findMany(documents) {}
function findOne(document) {
}
function databaseDecorator(wrapped) {
  return function () {
    console.log("Decorator Starting");
    const result = wrapped.apply(this, arguments);
    console.log("Finished");
    return result;
  };
}
const isCloseTo = (x) => Number.parseFloat(x).toFixed(2).toString();
const mintuesToHours = (minutes) => Math.floor(minutes / 60);
let [  
  james_rudolph,
  ana_kasparian,
  carl_a_springs,
  sue_t_wiegand,
  john_b_oneil,
  marie_s_bass,
  cheryl_crowson,
] = [401,402,403, 409, 412, 413, 418].map((_id) => findEmployee(_id));
let timesheetObject = {
  james_rudolph_timesheet: new TimeSheet(),
  ana_kasparian_timesheet: new TimeSheet(),
  carl_a_springs_timesheet: new TimeSheet(),
  sue_t_wiegand_timesheet: new TimeSheet(),
  john_b_oneil_timesheet: new TimeSheet(),
  marie_s_bass_timesheet: new TimeSheet(),
  cheryl_crowson_timesheet: new TimeSheet(),
};
let processed = [
  "james_rudolph",
  "ana_kasparian",
  "carl_a_springs",
  "sue_t_wiegand",
  "john_b_oneil",
  "marie_s_bass",
  "cheryl_crowson",
].map((employee) =>
  findTimeSheet(employee).map(
    (obj) => (timesheetObject[`${employee}_timesheet`].timesheets = obj),
  )
);
let {
  carl_a_springs_timesheet,
  james_rudolph_timesheet,
  ana_kasparian_timesheet,
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
  james_rudolph_wage = processPayroll(
    james_rudolph_timesheet,
    james_rudolph,
    WagesAndSalaries,
  ),
  ana_kasparian_wage = processPayroll(
    ana_kasparian_timesheet,
    ana_kasparian,
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

const wrapped = databaseDecorator(isCloseTo);
console.log(james_rudolph_wage)
console.log(
  mintuesToHours(ana_kasparian_wage.total_time) === 40,
  wrapped(ana_kasparian_wage.gross_wages) /**=== "430.01" */,
);
console.log(
  mintuesToHours(james_rudolph_wage.total_time) === 40,
  wrapped(james_rudolph_wage.gross_wages) /**=== "430.01" */,
);

console.log(
  mintuesToHours(carl_a_springs_wage.total_time) === 40,
  wrapped(carl_a_springs_wage.gross_wages) === "430.01",
);
console.log(
  mintuesToHours(sue_t_wiegand_wage.total_time) === 42,
  wrapped(sue_t_wiegand_wage.gross_wages) === "451.51",
);
console.log(
  mintuesToHours(john_b_oneil_wage.total_time) === 38,
  wrapped(john_b_oneil_wage.gross_wages) === "421.81",
);
console.log(
  mintuesToHours(marie_s_bass_wage.total_time) === 44,
  wrapped(marie_s_bass_wage.gross_wages) === "496.81",
);
console.log(
  mintuesToHours(cheryl_crowson_wage.total_time) === 40,
  wrapped(cheryl_crowson_wage.gross_wages) === "990.38",
);
