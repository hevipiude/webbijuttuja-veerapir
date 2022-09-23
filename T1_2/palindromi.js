var input = require("readline-sync");
var nimi = input.question("Anna sana:");
console.log(onkoPalindromi(nimi));

function onkoPalindromi(nimi) {
  var len = nimi.length;

  for (var i = 0; i < len / 2; i++) {
    if (nimi[i] !== nimi[len - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
