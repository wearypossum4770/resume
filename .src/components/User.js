/** @format */

export default class User {
  constructor() {
    this.address;
  }
  createUser({
    first_name = "",
    middle_name = "",
    last_name = "",
    email = "",
    phone_number = "",
  }) {
    this.firstName = first_name;
    this.middleName = middle_name;
    this.lastName = last_name;
    this.email = email;
    this.phoneNumber = phone_number;
  }
  getAddress(address) {
    let { streetOne, streetTwo, city, state, zipCode } = address;
  }
  setAddress() {}
}
