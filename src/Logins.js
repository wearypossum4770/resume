/** @format */

export default class Logins {
  constructor({ login_id, username, password_salt, password_hash, user_id }) {
    this.LoginId = login_id;
    this.username = username;
    this.passwordHash = password_hash;
    this.passwordSalt = password_salt;
    this.userId = user_id;
  }
}
