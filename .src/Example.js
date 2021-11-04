/** @format */

const PREFIX = "prefix";
class Example {
  instanceField = "example instance field";
  static baseStaticField = "base field";
  static anotherBaseStaticField = this.baseStaticField;
  [`${PREFIX}Field`] = "prefixed field";

  constructor() {
    this.public_method = this.publicMethod();
  }
  static baseStaticMethod() {
    return "base static method output";
  }
  publicMethod() {
    return "hello world \n from Example";
  }
}

class SubExample extends Example {
  instanceField = "sub example instance field";
  static subStaticField = "sub class field";
  #msg = "hello world";
  static subStaticField = super.baseStaticMethod();
  constructor({ ...args }) {
    super({ ...args });
    this.parentPublicMethod = super.publicMethod();
    this.public_method = this.publicMethod();
  }
  publicMethod() {
    return `hello world\nfrom Sub Example`;
  }

  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
const obj = { type: "object" };
const example = new Example(obj);
console.log(SubExample.anotherBaseStaticField);
const subexample = new SubExample(obj);
console.log(subexample);
console.log(example);

console.log(`Getters and Setters for message  ${subexample.msg}`);
subexample.msg = "cake";
console.log(`Change getters and setteres for mesage   ${subexample.msg}`);
