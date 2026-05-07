// countryCode : round.correct[0]

export function FlagCard({ countryCode }) {
  return (
    <img 
      src={`https://flagcdn.com/160x120/${countryCode}.png`} 
      alt="flag"
    />
  );
}