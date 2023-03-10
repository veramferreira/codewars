// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// MY SOLUTION

var isAnagram = function(test, original) {
    const newTest = test.toLowerCase().split('').sort().join('');
    const newOriginal = original.toLowerCase().split('').sort().join('');
    
    return newTest === newOriginal;
    
  };
  