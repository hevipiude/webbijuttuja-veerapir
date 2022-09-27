var input = require("readline-sync");
var nimi = input.question("Anna nimi:");
var numero = input.question("Anna puhelinnumero:");
var luettelo = [
  { nimi, numero },
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

console.log(searchNumber(luettelo));

function searchNumber(luettelo) {
  var yOrN = input.question("haluatko etsiä numeroa? vastaa 'k' tai 'e': ");
  if (yOrN == "k") {
    var nimi = input.question("Etsi numeroa nimellä: ");
    var x = luettelo.find((x) => x.nimi === nimi);
    console.log(nimi + " nimisen henkilön puhelinnumero on:");
    return x.numero;
  } else {
    console.log("kiitti moi");
  }
}
