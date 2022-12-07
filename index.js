function isPalindrome(word) {
  // Write your algorithm here
  let string= word.toLowerCase();
  let neWordarray= Object.assign([], string);;
  let reverseWord= neWordarray.reverse();
  let joinedWord= reverseWord.join("");
  if(string === joinedWord) {
  return ("true");
  }else if (string!== joinedWord) {
    return("false");
  }
}
console.log(isPalindrome('wow'));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("catch"));
console.log(isPalindrome("robot"));

/* 
  Add your pseudocode here
  create a neWord varible that converts our word to lowercase

  convert the neWord variable to an array 

  reverse the elements in the array

  join the reversed array to become a word:
   if the joined word that is reversed is the same as the neWord variable
     return true
  else if the joined word is not similar to the neWord variable
     return false
*/

/*
  Add written explanation of your solution here
  The first step involves creating a new variable that converts our variable to lowercase so 
  that when reversed the reversed word and the original are of the same case.The second step 
  involves conerting our new word into an array since arrays can be reversed.Once our array is
  reversed we convert it back to a word. The next step is ensuring that if the reversed word 
  and the new word are the same, our console returns true and if they are not the same, our
  console returns false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("wow"))
  console.log("Expecting: true")
  console.log("=>", isPalindrome("rotator"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting : false")
  console.log("=>>", isPalindrome("catch"))
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
