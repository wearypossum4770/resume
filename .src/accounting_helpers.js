/** @format */

const obj = {
  number_of_periods: 5,
  interest_rate: 5,
  annual_payment: 8668,
};
const isFinanceLease = array => array.some(element => true);

function calculatePresentValueOfAnnuityDue(array) {
  const obj = {
    number_of_periods: array[2],
    interest_rate: array[1],
    annual_payment: array[0],
  };
  return parseFloat(presentValueAnnuityDue(obj)) * obj.annual_payment;
}
const interestRate = rate => rate / 100;
const futureValueSingleSum = ({ interest_rate, number_of_periods }) =>
  Math.pow(1 + interestRate(interest_rate), number_of_periods);
const presentValueSingleSum = init => 1 / futureValueSingleSum(init);
const futureValueOrdinaryAnnuity = init =>
  (futureValueSingleSum(init) - 1) / interestRate(init.interest_rate);
const presentValueOrdinaryAnnuity = init =>
  (1 - presentValueSingleSum(init)) / interestRate(init.interest_rate);

const presentValueAnnuityDue = ({ interest_rate, number_of_periods }) =>
  1 +
  (1 - 1 / Math.pow(1 + interestRate(interest_rate), number_of_periods - 1)) /
    interestRate(interest_rate);

function factorToDecimal_5(func) {
  return Number.parseFloat(func).toFixed(5);
}
function financial(func) {
  return Number.parseFloat(func).toFixed(2);
}
const alternativeUseTest = str => str.toLowerCase() === "yes";
const transferOfOwnershipTest = str => str.toLowerCase() === "yes";

const purchaseOptionTest = str => str.toLowerCase() === "yes";

const presentValueTest = array => array[0] / array[1] > 0.9;

const leaseTermTest = array => array[0] / array[1] > 0.75;
