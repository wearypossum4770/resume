/** @format */

const arrayReducer = (array) =>
  array.reduce((accum, currVal) => parseInt(accum) + parseInt(currVal));
const luhn_algorithm = ({ card_number }) => {
  let cardNumber = Array.from(card_number.toString());
  let intermediatArray = [];

  let checkDigit = parseInt(cardNumber.slice(-1)[0]);
  function doubleNumber(num) {
    return num * 2;
  }

  function addDoubleDigitNumbers(num) {
    let array = [...num.toString()];
    return arrayReducer(array);
  }
  cardNumber.forEach((number, index) => {
    number = parseInt(number);
    if (index % 2 !== 0 && number > 4) {
      intermediatArray.push(addDoubleDigitNumbers(doubleNumber(number)));
    } else if (index % 2 !== 0 && number < 4) {
      intermediatArray.push(doubleNumber(number));
    } else {
      intermediatArray.push(number);
    }
  });
  let is_Valid = (num) => (num + checkDigit) % 10 === 0;
  let nonCheckDigits = arrayReducer(intermediatArray);
  return is_Valid(nonCheckDigits);
};

test.concurrent.each([
  [79927398711, false],
  [79927398712, false],
  [79927398713, false],
  [79927398714, false],
  [79927398715, false],
  [79927398716, false],
  [79927398717, false],
  [79927398718, false],
  [79927398719, false],
  [79927398710, false],
])("It should be true", (test_input, expected) =>
  expect(luhn_algorithm({ card_number: test_input })).toEqual(expected)
);
