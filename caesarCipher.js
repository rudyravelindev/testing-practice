function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Is it lowercase? (a-z is codes 97-122)
  if (code >= 97 && code <= 122) {
    const shiftedCode = ((code - 97 + shift) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }

  // Is it uppercase? (A-Z is codes 65-90)
  if (code >= 65 && code <= 90) {
    const shiftedCode = ((code - 65 + shift) % 26) + 65;
    return String.fromCharCode(shiftedCode);
  }

  // Otherwise, not a letter — return unchanged
  return char;
}

export function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}
