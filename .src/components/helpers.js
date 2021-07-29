/** @format */

export const milisecondsToDay = miliseconds => 86_400_000 * miliseconds;

export const yearsToSeconds = years => years * 31_536_000;
// https://standardjs.com/#what-you-might-do-if-youre-clever

export const balanceSheetToCashFlow = () => {
  switch (subType) {
    case "current_asset":
    case "current_assets":
    case "current_liability":
    case "current_liabilities":
      return "operating_activities";
    case "":
      // separate schedule or financial notes
      return "non_cash_investing_and_financing_activities";
    case "long_term_asset":
    case "long_term_assets":
      return "investing_activities";
    default:
      return "financing_activities";
  }
};
