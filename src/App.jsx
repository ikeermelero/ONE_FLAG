import { useState } from "react";
import "./App.css";
import Game from "./pages/game";
import Index from "./pages/index";

function App() {
  const [page, setPage] = useState("index");
  const [players, setPlayers] = useState(1);
  const [gameId, setGameId] = useState(0);

  const handleStart = (selectedPlayers) => {
    setPlayers(selectedPlayers);
    console.log(selectedPlayers)
    setGameId((prev) => prev + 1);
    setPage("game");
  };

  return (
    <>
      {page === "game" ? (
        <Game key={gameId} players={players} onQuit={() => setPage("index")} />
      ) : (
        <Index onStart={handleStart}/>
      )}
    </>
  );
}

export default App;