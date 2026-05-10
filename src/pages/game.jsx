import { useState } from "react";
import country from "../utils/api";
import Results from "../components/Results";
import GameHUD from "../components/GameHUD";

const shuffle = (x) => [...x].sort(() => Math.random() - 0.5);

const getRandomRound = () => {
  let options = [...country].sort(() => Math.random() - 0.5).slice(0, 4);

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
  console.log(isGameOver)

  if (isGameOver) {
    return <Results scores={scores} players={players} onQuit={onQuit} />;
  }

  const handleAnswer = (cn) => {
    setRoundsLeft(() => roundsLeft - 1);
    console.log(roundsLeft);
    setLocked(true);
    setIsCorrect(round.correct.code);

    if (cn !== round.correct.code) {
      setIsIncorrect(cn);
      console.log("No te desanimes.");
    } else {
      console.log("Acertaste, sigue así.");
      setScores((prev) => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1,
      }));
    }
    setTimeout(() => {
      setCurrentPlayer((prev) => (players === 2 ? (prev === 1 ? 2 : 1) : 1));
      setIsIncorrect(null);
      setIsCorrect(null);
      setRound(getRandomRound());
      setLocked(false);

    }, 1597);


  };

  const font = { fontFamily: "'Montserrat', sans-serif" };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 p-6">
      <GameHUD currentPlayer={currentPlayer} scores={scores} players={players} />

      <img
        className="rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10"
        src={`https://flagcdn.com/160x120/${round.correct.code}.png`}
        alt="Bandera"
      />

      <ul className="flex flex-col gap-3 w-full max-w-sm">
        {round.options.map((c) => (
          <li key={c.code}>
            <button
              disabled={locked}
              onClick={() => handleAnswer(c.code)}
              style={font}
              className={`w-full py-3.5 rounded-xl border text-sm font-semibold tracking-wide transition-all duration-200
              ${isCorrect === c.code
                  ? "bg-green-500/20 border-green-400 text-green-300 shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                  : isIncorrect === c.code
                    ? "bg-red-500/20 border-red-400 text-red-300 shadow-[0_0_20px_rgba(248,113,113,0.2)]"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-blue-600/20 hover:border-blue-500 hover:text-white"
                }`}>
              {c.name}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={onQuit}
        style={font}
        className="text-xs font-semibold tracking-widest uppercase text-white/30 hover:text-red-400 transition-colors duration-200"
      >
        Abandonar
      </button>
    </div>
  );
};

export default Game;