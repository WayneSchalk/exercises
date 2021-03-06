// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(a, b) {
  return cs(a) === cs(b);
}

const cs = (s) =>
  s.replace(/^[w]/g, "").toLowerCase().split("").sort().join("");

// function anagrams(stringA, stringB) {
//   let aCharMap = map(stringA);
//   let bCharMap = map(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// const map = (str) => {
//   let charMap = {};
//   for (let char of str.replace(/^[w]/g, "").toLowerCase()) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// };

module.exports = anagrams;
