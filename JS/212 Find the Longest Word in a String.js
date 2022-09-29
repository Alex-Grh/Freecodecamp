/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Tests
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Waiting:findLongestWordLength("May the force be with you") should return 5.
Waiting:findLongestWordLength("Google do a barrel roll") should return 6.
Waiting:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Waiting:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

// function findLongestWordLength(str) {
//   return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");



function findLongestWordLength(str) {
   str = str.split(' ').sort(function (a, b) {
      return a.length - b.length;
   });
   return str[str.length - 1].length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));