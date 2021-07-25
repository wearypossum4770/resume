/** @format */

const table_3 = new Map([
  ["weekly", 52],
  ["bi_weekly", 26],
  ["semi_monthly", 24],
  ["monthly", 12],
  ["quarterly", 4],
  ["semi_annually", 2],
  ["annually", 1],
  ["daily", 260],
  ["miscellaneous", 260],
]);

class DeductionWorksheet {
  constructor({ itemized_deduction_estimated }) {
    this._adjustments = 0;
    this.line_1 = itemized_deduction_estimated;
    this._line_2 = 0;
  }
  set line_2(filing_status) {
    switch (filing_status) {
      default:
        this._line_2 += 12_550;
        break;
      case "joint":
      case "widow":
        this._line_2 += 25_100;
        break;
      case "head_of_household":
        this._line_2 += 18_800;
        break;
    }
  }
  get line_2() {
    return this._line_2;
  }
  set line_4(adjustments) {
    return (this._adjustments += adjustments);
  }
  get line_4() {
    return this._adjustments;
  }
}

export default class WithholdingCertificate {
  constructor({ taxable_period_wages, yearly_periods, ...args }) {
    this.step4_b = new DeductionWorksheet(args);

    this.line_1a = taxable_period_wages;
    this.line_1b = table_3.get(yearly_periods);
    this.line_1e;
    this.line_1f;
    this.line_1g;
    this.line_1h;
    this.line_1i;
    this.line_1j;
    this.line_1k;
    this.line_1l;
  }
  line_1c() {
    return this.line_1b * this.line_1a;
  }
}
class Payroll extends WithholdingCertificate {
  constructor(params) {
    super(params);
  }
}
let filing = new Payroll({
  taxable_period_wages: 100,
  yearly_periods: "weekly",
  w4_submitted: true,
  itemized_deduction_estimated: null,
});
console.log(filing);
a;
