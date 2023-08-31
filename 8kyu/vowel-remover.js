// DESCRIPTION:
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// MY SOLUTION
function shortcut (string) {
  
    const arr = string.split('')
    
    const filteredStr = arr.filter((letter) => {
     return letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u"
    })
    
    return filteredStr.join('');
  }

