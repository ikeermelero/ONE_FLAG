import { useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const ScoreManager = ({ scores, onFinish }) => {
  useEffect(() => {
    const history = getFromLocalStorage("game_history", []);

    const newEntry = {
      ...scores,
      date: new Date().toISOString(),
    };

    history.push(newEntry);
    saveToLocalStorage("game_history", history);

    onFinish();
  }, [scores, onFinish]);

  return null;
};

export default ScoreManager;