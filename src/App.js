import { useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions");
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
