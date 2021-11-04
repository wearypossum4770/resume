/** @format */

export default class Membership {
  constructor({
    membership_id,
    user_id,
    account_id,
    role_id,
    email,
    phone_number,
    fax_number,
  }) {
    this.membershipId = membership_id;
    this.userId = user_id;
    this.accountId = account_id;
    this.roleId = role_id;
    this.email = email;
    this.phoneNumber = phone_number;
    this.faxNumber = fax_number;
  }
}
