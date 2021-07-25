/** @format */

export default class PaymentMethod {
  constructor({
    payment_type,
    transaction_amount,
    transaction_time,
    transaction_date,
    reconciliation_date,
    ...params
  }) {
    this.currencyRef = "USD";
    this.transactionAmount = transaction_amount;
    this.transactionTime = transaction_time;
    this.transactionDate = transaction_date;
    this.reconciliationDate = reconciliation_date;
    switch (payment_type) {
      case "CHECK":
        this.check(params);
        break;
      case "CREDIT_CARD":
        this.creditCard(params);
        break;
    }
  }
  check() {
    this.paymentName = "Check";
    this.syncToken;
  }
  creditCard() {
    this.paymentName = "Credit Card";
    this.syncToken;
  }
}
