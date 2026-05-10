export function getFromLocalStorage(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    const result = item ? JSON.parse(item) : defaultValue;
    return result;
}

export function saveToLocalStorage(key, value) {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
}