import { useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";

const ScoreManager = ({ scores, players }) => {
  useEffect(() => {
    if (players !== 2) {
      return;
    }

    const history = getFromLocalStorage("game_history", []);

    const newEntry = {
      ...scores,
      date: new Date().toISOString(),
    };

    history.push(newEntry);
    saveToLocalStorage("game_history", history);
  }, [scores, players]);

  return null;
};

export default ScoreManager;