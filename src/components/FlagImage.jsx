// constante countryCode se llama round.correct[0] en App component original

export function FlagImage({ countryCode }) {
  return (
    <img 
      src={`https://flagcdn.com/160x120/${countryCode}.png`} 
      alt="flag"
    />
  );
}