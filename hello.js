function isPalindrome(s) {
  return s == s.split("").reverse().join("");
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome(process.argv[2]));