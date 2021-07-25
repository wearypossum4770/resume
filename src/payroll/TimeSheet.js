/**
 * Class representing an employee's timesheet.
 *
 * @format
 * @see {@link TimeEntry/TimeEntry}
 * @returns {Array.<TimeEntry>} an array of time entries.
 */
import { readFileSync } from "fs";
import TimeEntry from "./TimeEntry.js";
export default class TimeSheet {
  #_timesheets;
  constructor() {
    this.startTime;
    this.startDay = "FRIDAY";
    this.#_timesheets = [];
    this.data = this.#_timesheets;
  }
  get timesheets() {
    return this.#_timesheets;
  }
  set timesheets(timesheet) {
    timesheet.calculateTime();
    this.#_timesheets.push(timesheet);
  }
}
export const findTimeSheet = employeeName =>
  JSON.parse(readFileSync(`../src/data/${employeeName}_time_clock.json`)).map(
    time => new TimeEntry(time),
  );
