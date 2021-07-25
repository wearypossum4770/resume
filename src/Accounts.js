/** @format */

import { testData as obj } from "./testData.js";

import uuid from "uuid";

class HouseAccount {
  constructor({ account_id, ...object }) {
    this.accountId = account_id ?? uuid.v4();
    this.isHouseAccount = true;
    this.kwargs = { ...object };
  }
  __init__() {
    return {
      is_house_account: this.isHouseAccount,
      account_id: this.accountId,
      ...this.kwargs,
    };
  }
}

class AccountBalance {
  constructor({
    account_id,
    current_balance = null,
    account_debits,
    account_credits,
    normal_balance,
  }) {
    this.accountId = account_id ?? uuid.v4();
    this.previousBalance = current_balance;
    this.accountDebits = account_debits ?? [];
    this.accountCredits = account_credits ?? [];
    this.normalBalance = normal_balance;
  }

  settleDebitsAndCredits() {
    switch (this.normalBalance) {
      case "debit":
        return (
          this.accountDebits.reduce((accum, currVal) => accum + currVal) -
          this.accountCredits.reduce((accum, currVal) => accum + currVal)
        );

      case "credit":
        return (
          this.accountCredits.reduce((accum, currVal) => accum + currVal) -
          this.accountDebits.reduce((accum, currVal) => accum + currVal)
        );
    }
  }
  currentBalance() {
    return this.settleDebitsAndCredits();
  }
}
export default class Account {
  constructor(...object) {
    this.current_balance = new AccountBalance(...object).currentBalance();

    // this.blockCredit= block_credits
    // this.blockDebits = block_debits
    // this.cautionText = caution_text
    // this.dateOpened = date_opened
    // this.dateClose = date_closed
  }
}
const createNewObject = (() => ({
  house_account: new HouseAccount(obj).__init__(),
  account: new Account(obj),
}))();
console.log(createNewObject);
