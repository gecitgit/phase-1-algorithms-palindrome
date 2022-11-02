function isPalindrome(word) {
  // Write your algorithm here
  if(word.split("").reverse().join("") === word){
    return true
  } else {
    return false
  }

}

/* 
  Add your pseudocode here
  take the string -- flip it around -- go for the === check -- ezpz

  .split will turn 'cat' into 'c', 'a', 't'        ///needs emptyy string
  do we have areverse?
  .reverse will give me 't', 'a', 'c'              /// no arg
  .join will turn array into string so >> 'tac'   ///need string?
  cat === tac
  false

*/

/*
  Add written explanation of your solution here
  - no builtin method in JS that I know of so we break it down flip it and reverse it 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
