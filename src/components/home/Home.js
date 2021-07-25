/** @format */

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Home() {
  const { first_name, middle_name, last_name } = useContext(UserContext);
  return <h1>{`Welcome ${first_name}`}</h1>;
}
