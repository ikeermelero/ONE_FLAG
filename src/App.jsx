import { useState } from "react";
//import { FlagCard } from "./components/FlagImage.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const country = {
  ad: "Andorra",
  ae: "Emiratos Árabes Unidos",
  af: "Afganistán",
  ag: "Antigua y Barbuda",
  ai: "Anguila",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  aq: "Antártida",
  ar: "Argentina",
  as: "Samoa Americana",
  at: "Austria",
  au: "Australia",
  aw: "Aruba",
  ax: "Åland",
  az: "Azerbaiyán",
  ba: "Bosnia y Herzegovina",
  bb: "Barbados",
  bd: "Bangladesh",
  be: "Bélgica",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bh: "Baréin",
  bi: "Burundi",
  bj: "Benín",
  bl: "San Bartolomé",
  bm: "Bermudas",
  bn: "Brunéi",
};

const shuffle = (x) => [...x].sort(() => Math.random() - 0.5);

const getRandomRound = (arr) => {
  const options = Object.entries(arr)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  const correct = options[0];
  const incorrect = options.slice(1, 4);
  
  console.log("Correcta:", correct)
  console.log("Incorrecta:", incorrect)
  console.log("Opciones:", options)
  return { options, correct, incorrect };
};

function MyButton() {
  return <button>I'm a button</button>;shuffle(options)
}

function App() {

  const [round, setRound] = useState(() => getRandomRound(country));
  const [score, setScore] = useState(0);

  const handleAnswer = (cn) => {
    if (cn === round.correct[0]) {
      //setScore((score) => score++);
      console.log("acertaste");
      setRound(getRandomRound())
    } else {
      console.log("no te desanimes");
    }
  };

  return (
    <>
      <h1>Hello Word!!</h1>

          <img src={`https://flagcdn.com/160x120/${round.correct[0]}.png`} alt="Fotografía de bandera" />
          <ul>
      {shuffle(round.options).map((c) => (
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" key={c[0]} onClick={() => handleAnswer(c[0])}> {c[1]} </button>
      ))}
      </ul>
    </>
  );
}

export default App;
