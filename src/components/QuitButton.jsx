const QuitButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="text-xs font-semibold tracking-widest uppercase text-white/30 hover:text-red-400 transition-colors duration-200"
        >
            {children}
        </button>
    );
};

export default QuitButton;