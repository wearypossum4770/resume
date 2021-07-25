/** @format */

const obj = [
  {
    account_name: "cash",
    transaction_date: "",
    post_ref: "",
    transaction_amount: "",
    running_balance: "",
    account_number: "",
  },
  { account_name: "washington_capital" },
];

export function Init() {
  // Identify account
  // identify account type
  // Decide which account increases or decreases
  //  Determine if accounting equation is valanced.
  const init = [
    { acount_type: "asset", account_name: "cash", group_number: 101 },
    {
      acount_type: "asset",
      account_name: "accounts_receivables",
      group_number: 111,
    },
    {
      acount_type: "asset",
      account_name: "notes_receivables",
      group_number: 121,
    },
    {
      acount_type: "asset",
      account_name: "office_supplies",
      group_number: 141,
    },
    { acount_type: "asset", account_name: "land", group_number: 151 },
    { acount_type: "asset", account_name: "building", group_number: 171 },
    { acount_type: "asset", account_name: "furniture", group_number: 191 },
    {
      acount_type: "liability",
      account_name: "accounts_payable",
      group_number: 201,
    },
    {
      acount_type: "liability",
      account_name: "salaries_payable",
      group_number: 211,
    },
    {
      acount_type: "liability",
      account_name: "interest_payable",
      group_number: 221,
    },
    {
      acount_type: "liability",
      account_name: "unearned_revenue",
      group_number: 231,
    },
    {
      acount_type: "liability",
      account_name: "notes_payable",
      group_number: 241,
    },
    { acount_type: "equity", account_name: "owner_capital", group_number: 301 },
    {
      acount_type: "equity",
      account_name: "owner_withdrawls",
      group_number: 311,
    },
    {
      acount_type: "revenue",
      account_name: "service_revenue",
      group_number: 401,
    },
    {
      acount_type: "revenue",
      account_name: "interest_revenue",
      group_number: 411,
    },
    { acount_type: "expense", account_name: "rent_expense", group_number: 501 },
    {
      acount_type: "expense",
      account_name: "salaries_expense",
      group_number: 511,
    },
    {
      acount_type: "expense",
      account_name: "utilities_expense",
      group_number: 521,
    },
    {
      acount_type: "expense",
      account_name: "advertising_expense",
      group_number: 531,
    },
  ];
}
export function normalBalance({ acount_type, account_name }) {
  let debit = ["assets", "owner_withdrawls", "expense"];
  // let credit = ['liability', 'owner_capital', 'revenue']
  if (acount_type === "equity" && account_name === "owner_capital") {
    return "debit";
  } else if (acount_type === "equity" && account_name === "owner_withdrawls") {
    return "credit";
  } else {
    return debit.includes(acount_type) ? "debit" : "credit";
  }
}
export function dataFlow() {
  return [
    "transaction_occur",
    "source_documents",
    "transactions_analyzed",
    "journal_transaction",
    "transaction_posted",
  ];
}
export function currentAssets() {}
export function assets() {}
export function liabilities() {}
export function equity() {}
export function isBalanced() {
  let balanced = assets() === liabilities() + equity();
  return balanced;
}
