function palindrome(str) {
  // Remove non-alphanumeric characters and lowercase
  let cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Reverse it
  let newStr = cleanStr.split("").reverse().join("");

  // Return boolean instead of console.log
  return cleanStr === newStr;
}

module.exports = palindrome;
