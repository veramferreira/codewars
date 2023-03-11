// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//MY SOLUTION

function stray(numbers) {
  
    let correctNum;
    
    if (numbers[0] === numbers[1]) {
      correctNum = numbers[0];
    } else if (numbers[0] === numbers[2]) {
      correctNum = numbers[0];
    } else {
      correctNum = numbers[2];
    }
    
    for (let i = 0; i<numbers.length; i++) {
      if(numbers[i] !== correctNum){
        return numbers[i];
      }
    }
    return -1;
  }

  //DIFFERENT SOLUTION

  function stray(numbers){
    for (let i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){
        return numbers[i]
    }
    }
  }