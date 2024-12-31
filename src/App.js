import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";

const initialState = {
  questions: [],
  // can be loaiding, error, ready, active, finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.paylaod, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error" };

    default:
      throw new Error("Unknown action");
  }
}
export default function App() {
  // creating state using reducer and also distructring it at the same time
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numOfquestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", paylaod: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "ready" && <StartScreen numOfquestions={numOfquestions} />}
      </Main>
    </div>
  );
}
