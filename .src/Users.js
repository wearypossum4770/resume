/** @format */

import uuid from "uuid";
import { testData as obj } from "./testData.js";
export default class User {
  constructor({
    user_id,
    first_name,
    last_name,
    username,
    middle_name,
    date_created,
    is_super_user,
    is_staff,
  }) {
    this.userId = user_id ?? uuid.v4();
    this.firstName = first_name;
    this.middleName = middle_name;
    this.lastName = last_name;
    this.username = username;
    this.dateCreated = date_created ?? Date();
    this.dateModified = Date();
    this.isSuperUser = is_super_user;
    this.isStaff = is_staff;
    this.permissions = this.getPermissions();
  }
  getPermissions() {
    return { is_staff: this.isStaff };
  }
  createUser() {}
}

const user = new User(obj);
console.log(user);
