// INSTRUCTIONS

// Write a function that checks if a given string (case insensitive) is a palindrome.


// MY SOLUTION

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
  }
