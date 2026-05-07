import { useState } from "react";
import "./App.css";
import country from "./utils/api"

const shuffle = (x) => [...x].sort(() => Math.random() - 0.5);

const getRandomRound = (arr) => {
  let options = [...arr]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const correct = options[0];
  const incorrect = options.slice(1, 4);
  options = shuffle(options)
  return { options, correct, incorrect };
};

function App() {

  const [round, setRound] = useState(() => getRandomRound(country));
  const [isIncorrect, setIsIncorrect] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (cn) => {
    setIsCorrect(round.correct.code)
    if (cn !== round.correct.code) {    
      setIsIncorrect(cn);
      console.log("No te desanimes");
    }
    console.log("Acertaste");
    setTimeout(() => {
      setIsIncorrect(null)
      setIsCorrect(null)
      setRound(getRandomRound(country));
    }, 1597);
  };

  return (
    <>
      <h1>One Flag</h1>

      <>
        <img
          className="flag-img"
          src={`https://flagcdn.com/160x120/${round.correct.code}.png`}
          alt="Bandera"
        />

        <ul>
          {round.options.map((c) => (
            <li key={c.code}>
              <button className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${(isIncorrect === c.code) ? 'incorrect' : (isCorrect === c.code) ? 'correct' : ''}`} onClick={() => handleAnswer(c.code)}>
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </>
    </>
  );
}


export default App;
