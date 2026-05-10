import { useState } from "react";
import "./App.css";
import Game from "./pages/game";
import Index from "./pages/index";
import ScoreManager from "./utils/ScoreManager";

function App() {
  const [page, setPage] = useState("index");
  const [finalScores, setFinalScores] = useState(null);

  const handleGameOver = (scores) => {
    setFinalScores(scores);
    setPage("save");
  };

  return (

    
    <>
      {page === "game" ? (
        <Game onQuit={() => setPage("index")} onFinish={handleGameOver} />
      ) : page === "save" ? (
        <ScoreManager scores={finalScores} onFinish={() => setPage("index")} />
      ) : (
        <Index onStart={() => setPage("game")} />
      )}
    </>
  );
}

export default App;