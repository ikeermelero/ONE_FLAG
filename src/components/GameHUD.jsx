const GameHUD = ({ currentPlayer, scores, players }) => {
  return (
    <>
      <p className="flex gap-4 text-white">Turno para jugador {currentPlayer}</p>

      <div className="flex gap-4 text-white">
        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
          Player 1: {scores[1]}
        </div>

        {players === 2 && (
          <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            Player 2: {scores[2]}
          </div>
        )}
      </div>
    </>
  );
};

export default GameHUD;