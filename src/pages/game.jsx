import { useState } from "react";
import country from "../utils/api";
import Results from "../components/Results";
import GameHUD from "../components/GameHUD";
import FlagImage from "../components/FlagImage";
import QuitButton from "../components/QuitButton";
import AnswerList from "../components/AnswerList";

const shuffle = (x) => [...x].sort(() => Math.random() - 0.5);

const getRandomRound = () => {
  let options = shuffle(country).slice(0, 4);

  const correct = options[0];
  const incorrect = options.slice(1, 4);
  options = shuffle(options);
  return { options, correct, incorrect };
};

const Game = ({ onQuit, players }) => {
  const [round, setRound] = useState(() => getRandomRound());
  const [isIncorrect, setIsIncorrect] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [locked, setLocked] = useState(false);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [roundsLeft, setRoundsLeft] = useState(players === 2 ? 20 : 10);
  const isGameOver = roundsLeft === 0;
  const [showResults, setShowResults] = useState(false);

  if (showResults) {
    return <Results scores={scores} players={players} onQuit={onQuit} />;
  }

  const handleAnswer = (cn) => {
    if (locked) return;

    const nextRoundsLeft = roundsLeft - 1;

    setRoundsLeft(nextRoundsLeft);
    setLocked(true);
    setIsCorrect(round.correct.code);

    if (cn !== round.correct.code) {
      setIsIncorrect(cn);
    } else {
      setScores((prev) => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
    }

    setTimeout(() => {
      setCurrentPlayer((prev) => (players === 2 ? (prev === 1 ? 2 : 1) : 1));
      setIsIncorrect(null);
      setIsCorrect(null);
      setLocked(false);

      if (nextRoundsLeft === 0) {
        setShowResults(true);
      } else {
        setRound(getRandomRound());
      }
    }, 1597);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 p-6">
      <GameHUD currentPlayer={currentPlayer} scores={scores} players={players} />
      <FlagImage countryCode={round.correct.code} />
      <AnswerList options={round.options} locked={locked} isCorrect={isCorrect} isIncorrect={isIncorrect} handleAnswer={handleAnswer} />
      <QuitButton onClick={onQuit}>Abandonar partida</QuitButton>
    </div>
  );
};

export default Game;