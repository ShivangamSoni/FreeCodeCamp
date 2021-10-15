function rot13(str) {
  return str
    .split("")
    .map((value) => {
      const charCode = value.charCodeAt(0);
      if (charCode < 65 || charCode > 90) {
        return value;
      }
      if (charCode - 13 >= 65) {
        return String.fromCharCode(charCode - 13);
      } else {
        return String.fromCharCode(91 - (13 - (charCode - 65)));
      }
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
