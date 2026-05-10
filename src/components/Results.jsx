const Results = ({ scores, players, onQuit }) => {
    const p1 = scores[1];
    const p2 = scores[2];

    let message = "";
    if (players === 1) {
        message = `Resultado final: Player 1 ha conseguido ${p1} puntos.`;
    } else if (p1 > p2) {
        message = `Gana Player 1 con ${p1} puntos frente a ${p2}.`;
    } else if (p2 > p1) {
        message = `Gana Player 2 con ${p2} puntos frente a ${p1}.`;
    } else {
        message = `Empate: ${p1} - ${p2}`;
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-6 p-6 text-white">
            <h2 className="text-3xl font-bold">Fin de la partida</h2>
            <p>{message}</p>

            <div className="flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    Player 1: {p1}
                </div>
                {players === 2 && (
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        Player 2: {p2}
                    </div>
                )}
            </div>

            <button
                onClick={onQuit}
                className="text-xs font-semibold tracking-widest uppercase text-white/30 hover:text-red-400 transition-colors duration-200"
            >
            Volver al inicio
            </button>
        </div>
    );
};

export default Results;