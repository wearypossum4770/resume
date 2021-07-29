/** @format */

export const endingBondState = ({
  payable_at,
  stated_interest_rate,
  face_value,
  term_length,
  annual_payments_made,
}) => ({
  get annual_number() {
    switch (annual_payments_made) {
      case "weekly":
        return 52;
      case "bi_weekly":
        return 26;
      case "monthly":
        return 12;
      case "bi_monthly":
        return 6;
      case "semi_monthly":
        return 24;
      case "semi_annual":
        return 6;
      case "annual":
        return 1;
    }
  },
  get annual_periods() {
    return term_length;
  },
  // carrying_value: ,
  get issued_at() {
    if (payable_at < 100) {
      return "at_discount";
    } else if (payable_at > 100) {
      return "at_premium";
    } else if (payable_at === 100) {
      return "at_face_value";
    }
  },

  // interest_periods:,
  bonds_payable_discount: null,
  bonds_payable_premium: null,
  get annual_amortization() {
    return this.issuance_discount / term_length;
  },
  get interest_payment() {
    return face_value * this.stated_rate * (this.annual_number / 12);
  },
  get previous_bonds_payable_discount() {
    return this.bonds_payable_discount * 1;
  },
  get previous_bonds_payable_premium() {
    return this.bonds_payable_premium * 1;
  },
  get current_bonds_payable_discount() {
    return this.previous_bonds_payable_discount - annual_amortization;
  },
  get current_bonds_payable_premium() {
    return this.previous_bonds_payable_premium;
  },
  get issuance_discount() {
    return face_value - this.issued_price;
  },
  get issued_price() {
    return face_value * this.issued_rate;
  },

  issued_rate: payable_at / 100,
  stated_rate: stated_interest_rate / 100,
});
