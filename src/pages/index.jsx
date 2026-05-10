import { useState } from "react";

const font = { fontFamily: "'Montserrat', sans-serif" };

export default function PlayerSelect({ onStart }) {
  const [players, setPlayers] = useState(1);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">

        <div className="mb-10">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2" style={font}>Configuración</p>
          <h2 className="text-white text-3xl font-bold" style={font}>¿Cuántos jugadores?</h2>
        </div>

        <div className="flex gap-3 mb-10">
          {[{ n: 1, label: "1 Jugador", badge: "Solo" }, { n: 2, label: "2 Jugadores", badge: "VS" }].map(({ n, label, badge }) => (
            <button
              key={n}
              onClick={() => setPlayers(n)}
              style={font}
              className={`flex-1 p-4 rounded-xl border transition-all duration-200 text-left
                ${players === n
                  ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  : "bg-white/5 border-white/10 hover:border-white/20"}`}
            >
              <span className={`block text-[10px] font-bold tracking-widest uppercase mb-2 ${players === n ? "text-blue-400" : "text-white/30"}`}>{badge}</span>
              <span className={`text-sm font-semibold ${players === n ? "text-white" : "text-white/50"}`}>{label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => onStart(players)}
          style={font}
          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-[0.98]"
        >
          Empezar
        </button>

      </div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
    </div>
  );
}