// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let p1 = [];
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     p1.unshift(arr[i]);
//   }
//   return p1.join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let characters of str) {
//     reversed = characters + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
