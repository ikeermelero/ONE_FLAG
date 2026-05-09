import { useState } from "react";
import "./App.css";
import Game from "./pages/game";
import Index from "./pages/index";

function App() {
  const [page, setPage] = useState("index");

  return (

    
    <>
      {page === "game" ? (
        <Game onQuit={() => setPage("index")} />
      ) : (
        <Index onStart={() => setPage("game")} />
      )}
    </>
  );
}

export default App;