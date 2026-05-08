import { useState } from "react";
import "./App.css";
import Game from "./pages/game";
import Index from "./pages/index";

function App() {
  const [page, setPage] = useState("index");

  return (
    <>
      <h1>One Flag</h1>

      {page === "game" ? (
        <Game onQuit={() => setPage("index")} />
      ) : (
        <Index onStart={() => setPage("game")} />
      )}
    </>
  );
}

export default App;