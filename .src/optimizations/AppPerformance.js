/** @format */

import { PerformanceObserver, performance } from "perf_hooks";

var arr = new Array(100000).fill(Math.random());
function testingFor(arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}
performance.mark("functionStart");
testingFor(arr);
performance.mark("functionEnd");
performance.measure("functionMeasure", "functionStart", "functionEnd");
console.log(performance);
// console.log(performance.getEntriesByName('functionMeasure')[0].duration);
// performance.getEntries()
// // - Returns everything stored in the performance entry buffer.
// performance.getEntriesByName('name')
// // - Returns entries that match the given name.
// performance.getEntriesByType('type')
// // - Returns entries of a specific type.
