/** @format */

import { useState } from "react";
// https://bisg.org/page/BusinessEconomics
// https://dev.to/arjhun777/video-chatting-and-screen-sharing-with-react-node-webrtc-peerjs-18fg
// https://flaviocopes.com/webrtc/
const bondState = {
  account_name: "bonds_payable",
  account_sub_type: "long_term_liability",
  account_type: "liability",
  annual_payments_made: "semi_annual",
  annual_periods: "",
  face_value: 200_000,
  issue_date: "December 31, 2018",
  issue_price: "",
  issued_at: "",
  payable_at: 90,
  stated_interest_rate: 9,
  term_length: 10,
};
export default function Bond() {
  const [bond, setBond] = useState(bondState);
  performance.mark("ComponentMountStart");
  console.log(bond.annual_periods);
  const handleChange = e => {
    const { name, value } = e.target;
    setBond({ ...bond, [name]: value });
  };
  performance.mark("ComponentMountEnd");
  performance.measure(
    "HomeComponentMount",
    "ComponentMountStart",
    "ComponentMountEnd",
  );
  return (
    <form>
      <label htmlFor="face_value">
        Original Bond Amount:
        <input
          type="number"
          onChange={handleChange}
          id="face_value"
          name="face_value"
        />
      </label>
      <label htmlFor="term_length">
        Maturity Time (years):
        <input
          type="number"
          onChange={handleChange}
          id="term_length"
          name="term_length"
        />{" "}
      </label>
      <label htmlFor="payable_at">
        Bonds Payable At:
        <input
          type="number"
          onChange={handleChange}
          id="payable_at"
          name="payable_at"
        />
      </label>
      <label htmlFOr="annual_periods">
        Payment Frequency:
        <select
          name="annual_payments_made"
          id="annual_payments_made"
          onChange={handleChange}>
          <option value="not_selected">Select one...</option>
          <option value="weekly" data-calculation="52">
            weekly
          </option>
          <option value="bi_weekly" data-calculation="26">
            bi_weekly
          </option>
          <option value="monthly" data-calculation="12">
            monthly
          </option>
          <option value="bi_monthly" data-calculation="6">
            semi_monthly
          </option>
          <option value="semi_monthly" data-calculation="24">
            semi_monthl
          </option>
          <option value="annual" data-calculation="1">
            annual
          </option>
          <option value="semi_annual" data-calculation="2">
            semi_annual
          </option>
        </select>
      </label>
      <label htmlForm="issuance_date">
        Date Issued:{" "}
        <input
          onChange={handleChange}
          type="date"
          name="issuance_date"
          id="issuance_date"
        />
      </label>
      <label htmlFor="stated_interest_rate">
        Interest Rate (##%):
        <input
          type="number"
          onChange={handleChange}
          id="stated_interest_rate"
          name="stated_interest_rate"
        />
      </label>
    </form>
  );
}
