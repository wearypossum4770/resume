/** @format */

import cuid from "cuid";
/**
 * @param
 * @returns {{ transaction_id:String, total_time:Number, employee_id:String, time_in:Date, time_out:Date, }} TimeEntry
 */
export default class TimeEntry {
  constructor({
    clock_id = null,
    transaction_id,
    total_time,
    employee_id,
    time_in = null,
    time_out = null,
  }) {
    this.clock_id = clock_id;
    this.employee_id = employee_id;
    this.transaction_id = transaction_id ?? cuid();
    this.time_in = new Date(time_in);
    this.time_out = new Date(time_out);
    this.total_time = total_time;
  }
  clock_in() {
    if (!this.time_in) {
      return (this.time_in = new Date());
    } else {
      return this.time_in;
    }
  }
  calculateTime() {
    if (this.time_out && this.time_in) {
      this.total_time =
        (this.time_out.getTime() - this.time_in.getTime()) / 60000;
    }
    return this.total_time;
  }
  clock_out() {
    if (!this.time_out) {
      return (this.time_out = new Date());
    } else {
      return this.time_out;
    }
  }
}
