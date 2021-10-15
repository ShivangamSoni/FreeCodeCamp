function palindrome(str) {
  let newStr = str
    .toLowerCase()
    .split("")
    .filter((val) => /[a-z0-9]/.test(val))
    .join("");

  let midPoint = newStr.length / 2;

  for (let i = 0, j = newStr.length - 1; i <= midPoint, j >= midPoint; i++, j--) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("1 eye for of 1 eye."));
