/** @format */

class Account {
  constructor() {
    this.accountType = "bond";
  }
}

class Bond extends Account {
  #height = 0;
  width = 0;
  constructor({
    is_convertible,
    bond_proceeds,
    shares_authorized,
    shares_issued,
    shares_outstanding,
    fair_value,
    market_value,
    net_income,
    preferred_dividends,
    height,
    width,
    weighted_common_shares_outstanding,
    ...args
  }) {
    super({ ...args });
    this.#height = height;
    this.isConvertible = is_convertible;
    this.bondProceeds = bond_proceeds;
    this.sharesAuthorized = shares_authorized;
    this.sharesIssued = shares_issued;
    this.sharesOutstanding = shares_outstanding;
    this.netIncome = net_income;
    this.preferredDividends = preferred_dividends;
    this.marketValue = market_value;
    this.fairValue = fair_value;
    this.weightedShares = weighted_common_shares_outstanding;
    this.EPS = this.earningsPerShare();
    this.instance = this.__init__();
  }

  __init__() {
    return { height: this.#height };
  }
  earningsPerShare() {
    return (this.netIncome - this.preferredDividends) / this.weightedShares;
  }
}

const obj = {
  is_convertible: 0,
  bond_proceeds: 0,
  shares_authorized: 0,
  shares_issued: 0,
  width: 200,
  shares_outstanding: 0,
  fair_value: 0,
  market_value: 0,
  net_income: 50000,
  preferred_dividends: 0,
  weighted_common_shares_outstanding: 5000,
  height: 100,
};
const bond = new Bond(obj);

console.log(bond);
console.log(bond.constructor);
