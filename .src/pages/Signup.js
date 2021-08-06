/** @format */

import { useState, useEffect } from "react";
export default function Signup() {
  let url = "http://localhost:3003/users/add";
  const [state, setState] = useState({
    username: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    async function createUser() {
      try {
        const response = await (
          await fetch(url, {
            mode: "cors",
            method: "post",
            body: JSON.stringify(state),
          })
        ).json();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    createUser();
  };

  return (
    <div className="content-section">
      <form
        className="w3-container w3-card-4 w3-light-grey"
        onSubmit={handleSubmit}
      >
        <p>
          <label> First Name </label>

          <input
            autoComplete="firstName"
            className="w3-input"
            id="first_name"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="first_name"
            type="text"
            value="john"
          />
        </p>
        <p>
          <label> Middle Name </label>

          <input
            autoComplete="middleName"
            className="w3-input"
            id="middle_name"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="middle_name"
            value="daniel"
            type="text"
          />
        </p>
        <p>
          <label> Last Name </label>

          <input
            autoComplete="lastName"
            className="w3-input"
            id="last_name"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="last_name"
            value="doe"
            type="text"
          />
        </p>
        <p>
          <label> Email: </label>

          <input
            autoComplete="email"
            className="w3-input"
            id="email"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="email"
            value="john.daniel.doe@example.com"
            type="email"
          />
        </p>
        <p>
          <label> Username: </label>
          <input
            autoComplete="username"
            className="w3-input"
            id="username"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="username"
            value="john.daniel.doe"
          />
        </p>
        <p>
          <label> Password: </label>

          <input
            autoComplete="new-password"
            className="w3-input"
            id="password1"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="password1"
            type="password"
            value="jjq4dSj4nDYQnFS"
          />
        </p>
        <p>
          <label> Confirm Password: </label>

          <input
            autoComplete="new-password"
            className="w3-input"
            id="password2"
            onChange={(e) => handleChange(e)}
            onClick={(e) => handleChange(e)}
            name="password2"
            type="password"
            value="jjq4dSj4nDYQnFS"
          />
        </p>
        <button onClick={handleClick}>Join Now!!</button>
        <button type="reset">Cancel</button>
        <div>
          <small>
            <a href=""> Forgot Password? </a>
          </small>
        </div>
        <div>
          <small>
            Already have an account?
            <a href=""> Login </a>
          </small>
        </div>
      </form>
    </div>
  );
}
