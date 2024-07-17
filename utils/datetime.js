export const milisecondsToDay = (miliseconds) => 86_400_000 * miliseconds;

export const yearsToSeconds = (years) => years * 31_536_000;

export const highPerformanceTimestamp = () =>
  window?.performance?.timing?.navigationStart ??
  0 + window?.performance?.now();
export const standardTimeStamp = () => Date?.now() ?? new Date().getTime();
export const generateTimeStamp = () =>
  window?.performance &&
  window.performance.timing &&
  window.performance.now &&
  window?.performance?.timing?.navigationStart
    ? highPerformanceTimestamp
    : standardTimeStamp;
