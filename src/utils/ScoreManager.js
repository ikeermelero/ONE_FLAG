import { useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";

const ScoreManager = ({ scores, players, onFinish }) => {
  useEffect(() => {
    if (players !== 2) {
      onFinish();
      return;
    }

    const history = getFromLocalStorage("game_history", []);

    const newEntry = {
      ...scores,
      date: new Date().toISOString(),
    };

    history.push(newEntry);
    saveToLocalStorage("game_history", history);

    onFinish();
  }, [scores, players, onFinish]);

  return null;
};

export default ScoreManager;