/** @format */

export default class Income {
  constructor(object) {
    this.instance = this.__init__(object);
  }
  __init__(obj) {
    return obj;
  }
  alimony() {
    this.__docs__ =
      "Alimony has been held not to be taxable income, Gould v. Gould, 245 U. S. 151.";
  }
}
