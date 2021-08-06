/** @format */

import cuid from "cuid";
export default class WagesAndSalaries {
  #payPeriods = {
    semiannually: 2,
    quarterly: 4,
    monthly: 12,
    semimonthly: 24,
    biweekly: 26,
    weekly: 52,
    daily: 260,
  };
  #regularTime;
  #overtimeRate;
  #federalMinimumWage;
  #localMinimumWage;
  #tippedMinimumWage;
  #prevailingWage;
  constructor({ sync_token = null, regular_rate = null, pay_type = null }) {
    this.sync_token = sync_token ?? cuid();
    this.#localMinimumWage = 7.25;
    this.#federalMinimumWage = 7.25;
    this.#tippedMinimumWage = 2.13;
    this.#prevailingWage =
      this.#localMinimumWage > this.#federalMinimumWage
        ? this.#localMinimumWage
        : this.#federalMinimumWage;
    this.regular_rate = regular_rate;
    this.pay_type = pay_type;
    this.overtime_minutes;
    this.total_time = 0;
    this.regular_minutes;
    this.gross_wages = 0;
    this.#regularTime = 2400;
    this.#overtimeRate = this.regular_rate * 1.5;
  }
  tippedEmployee(tips) {
    this.regular_rate =
      this.regular_rate < this.#tippedMinimumWage
        ? this.#tippedMinimumWage
        : this.regular_rate;

    let needs_plus_up = 40 * this.regular_rate < 40 * this.this.#prevailingWage;
    console.log(needs_plus_up);
    if (needs_plus_up) {
    }
    let _minutes = tips.reduce(
      (accum, obj) => accum + obj?.total_tips ?? obj?.gratuity,
      0
    );
  }
  salariedEmployees() {
    this.regular_minutes = this.#regularTime;
    this.total_time += this.regular_minutes;
    this.gross_wages = this.regular_wages = this.regular_rate;
    return;
  }
  hourlyEmployees(arr) {
    let _minutes = arr.reduce((accum, obj) => accum + obj.total_time, 0);
    this.regular_minutes =
      _minutes < this.#regularTime ? _minutes : this.#regularTime;
    let overtimeMinutes = _minutes - this.#regularTime;

    if (overtimeMinutes > 0) {
      this.overtime_minutes = overtimeMinutes;
      this.total_time += this.overtime_minutes;
      this.overtime_wages = (this.overtime_minutes / 60) * this.#overtimeRate;
      this.gross_wages += this.overtime_wages;
    }
  }
  calculateEarnings(arr) {
    if (this.pay_type === "tipped") {
      this.tippedEmployee(arr);
    } else if (this.pay_type === "salary") {
      return this.salariedEmployees();
    } else {
      this.hourlyEmployees(arr);
      this.regular_rate =
        this.regular_rate < this.#prevailingWage
          ? this.#prevailingWage
          : this.regular_rate;
      this.total_time += this.regular_minutes;
      this.regular_wages = (this.regular_minutes / 60) * this.regular_rate;
      this.gross_wages += this.regular_wages;
      return;
    }
  }
}
