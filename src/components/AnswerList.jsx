const font = { fontFamily: "'Montserrat', sans-serif" };

const AnswerList = ({ options, locked, isCorrect, isIncorrect, handleAnswer }) => {
    return (
        <ul className="flex flex-col gap-3 w-full max-w-sm">
            {options.map((c) => (
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
                            }`}
                    >
                        {c.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default AnswerList;