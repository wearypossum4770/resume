/** @format */

import { useReducer } from "react";
// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: state.posts.concat(action.payload) };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const initialState = {
  posts: [],
  error: null,
};
export default function BlogContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export const Context = createContext(initialState);
