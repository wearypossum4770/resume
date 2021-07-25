/** @format */

import { endingBondState, monthSwitcher } from "./BondPreparation.js";
// https://github.com/FiloSottile/mkcert
const part1 = {
  "": "equity_securities",
  control_level: "no_significant_influence​",
};

const part2 = {
  "": "equity_securities",
  "": "significant_influence​",
};
const part3 = {
  "": "equity_securities",
  control_level: "control",
};
const initialState = {
  account_name: "bonds_payable",
  account_sub_type: "long_term_liability",
  account_type: "liability",
  annual_payments_made: "semi_annual",
  face_value: 200_000,
  issue_date: "December 31, 2018",
  payable_at: 90,
  stated_interest_rate: 4,
  term_length: 10,
};
describe("testing initalState", () => {
  it("should give appropriate initialState for account_name", () =>
    expect(initialState.account_name).toBe("bonds_payable"));
  it("should give appropriate initialState for account_sub_type", () =>
    expect(initialState.account_sub_type).toBe("long_term_liability"));
  it("should give appropriate initialState for account_type", () =>
    expect(initialState.account_type).toBe("liability"));
  it("should give appropriate initialState for annual_payments_made", () =>
    expect(initialState.annual_payments_made).toBe("semi_annual"));
  it("should give appropriate initialState for face_value", () =>
    expect(initialState.face_value).toBe(200_000));
  it("should give appropriate initialState for issue_date", () =>
    expect(initialState.issue_date).toBe("December 31, 2018"));
  it("should give appropriate initialState for payable_at", () =>
    expect(initialState.payable_at).toBe(90));
  it("should give appropriate initialState for stated_interest_rate", () =>
    expect(initialState.stated_interest_rate).toBe(4));
  it("should give appropriate initialState for term_length", () =>
    expect(initialState.term_length).toBe(10));
});
describe("preparation tolerance testing", () => {
  const test_case = endingBondState(initialState);
  it("should give appropriate issued_at", () =>
    expect(test_case.issued_at).toBe("at_discount"));
  it("should give appropriate annual_amortization", () =>
    expect(test_case.annual_amortization).toBe(2000));
  //   it("should give approriate  previous_bonds_payable_discount", () =>
  //     expect(test_case.previous_bonds_payable_discount).toBe(undefined));
  //   it("should give approriate  previous_bonds_payable_premium", () =>
  //     expect(test_case.previous_bonds_payable_premium).toBe());
  //   it("should give approriate  current_bonds_payable_discount", () =>
  // expect(test_case.current_bonds_payable_discount).toBe());
  //   it("should give approriate  current_bonds_payable_premium", () =>
  //     expect(test_case.current_bonds_payable_premium).toBe());
  it("should give approriate  issuance_discount", () =>
    expect(test_case.issuance_discount).toBe(20000));
  it("should give appropriate interest_payment", () =>
    expect(test_case.interest_payment).toBe(4000));
  it("should give appropriate carrying_value ", () =>
    expect(test_case.carrying_value).toBe());
  it("should give appropriate interest_periods ", () =>
    expect(test_case.interest_periods).toBe());
  it("should give appropriate bonds_payable_discount ", () =>
    expect(test_case.bonds_payable_discount).toBe(null));
  it("should give appropriate bonds_payable_premium ", () =>
    expect(test_case.bonds_payable_premium).toBe(null));
  it("should give appropriate issued_price ", () =>
    expect(test_case.issued_price).toBe(180000));
  it("should give appropriate issued_rate ", () =>
    expect(test_case.issued_rate).toBe(0.9));
  it("should give appropriate stated_rate ", () =>
    expect(test_case.stated_rate).toBe(0.04));
});
