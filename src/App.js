import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";

const initialState = {
  questions: [],
  // can be loaiding, error, ready, active, finished
  status: "loading",
};
function reducer(state, reducer) {}
export default function App() {
  // creating state using reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error fetching data"));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
