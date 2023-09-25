const isPalindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  if (str === reverse) {
    console.log(str + "is a palindrome.");
  } else {
    console.log(str + "is not a palindrome.");
  }
};

console.log(isPalindrome(yapay));
console.log(isPalindrome(berat));
