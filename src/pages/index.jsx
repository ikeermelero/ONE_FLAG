import { useState } from "react";

const Index = ({ onStart }) => {
    const [players, setPlayers] = useState(1);

    return (
        <>
            <h2>Cuántos jugadores</h2>
            <label>
                <input type="radio" name="players" value={1} checked={players === 1} onChange={() => setPlayers(1)} />
                1 jugador
            </label>

            <label>
                <input type="radio" name="players" value={2} checked={players === 2} onChange={() => setPlayers(2)} />
                2 jugadores
            </label>

            <button onClick={onStart} className={"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>Empezar</button>
        </>
    )
}

export default Index