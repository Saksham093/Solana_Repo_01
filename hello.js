function isPalindrome(s) {
  return s == s.split("").reverse().join("");
}

console.log(isPalindrome(process.argv[2]));
