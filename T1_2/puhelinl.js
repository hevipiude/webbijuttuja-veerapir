var luettelo = [
  {
    nimi: "pate",
    numero: "0400401234",
  },
  {
    nimi: "pete",
    numero: "0500502345",
  },
  {
    nimi: "pate",
    numero: "0100101234",
  },
];
var input = require("readline-sync");
var u_nimi = input.question("Anna nimi:");
var u_numero = input.question("Anna puhelinnumero:");

var uusi = { nimi: u_nimi, numero: u_numero };
luettelo.push(uusi);

console.log(searchNumber(luettelo, "pate"));

function searchNumber(luettelo, nimi) {
  var yOrN = input.question("haluatko etsiä numeroa? vastaa 'k' tai 'e': ");
  if (yOrN == "k") {
    var x = luettelo.find((x) => x.nimi === nimi);
    console.log(nimi + " nimisen henkilön puhelinnumero on:");
    return x.numero;
  } else {
    console.log("kiitti moi");
  }
}
console.log(luettelo);
