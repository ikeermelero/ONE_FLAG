const FlagImage = ({ countryCode }) => {
  return (
    <img
      className="rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10"
      src={`https://flagcdn.com/160x120/${countryCode}.png`}
      alt="Bandera"
    />
  );
};

export default FlagImage;