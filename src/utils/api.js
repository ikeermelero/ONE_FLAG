const response = await fetch('https://flagcdn.com/en/codes.json');
const country = Object.entries(await response.json()).map(([code, name]) => ({ code, name }));

export default country;