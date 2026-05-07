// constante countryCode se llama round.correct[0] en App component original

export function FlagImage({ countryCode }) {
  return (
    <img 
      src={`https://flagcdn.com/80x60/${countryCode}.png`} 
      alt="flag"
    />
  );
}