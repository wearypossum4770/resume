/** @format */

import * as stats from "simple-statistics";
const getBaseLog = (x, y) => Math.log(y) / Math.log(x);

const sturges_rule = (x, y) => 1 + getBaseLog(x, y);

const sorted = (array) => array.sort((a, b) => a - b);

const median = (array) => {
  let init = sorted(array);
  let half = init.length / 2;
  if (init.length % 2 === 0) {
    return (init[Math.floor(half) - 1] + init[Math.floor(half)]) / 2;
  } else {
    return init[Math.floor(half)];
  }
};
const mean = () => null;
const mode = () => null;
const statsticalRange = () => null;
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const num = [3, 3, 8, 9, 15, 15, 15, 17, 17, 27, 40, 44,]// 44]
const s = median(num);
console.log(s);
