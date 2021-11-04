/** @format */

export const processPayroll = ({ data }, employee, obj) => {
  let wage = new obj(employee);
  wage.calculateEarnings(data);
  return wage;
};
