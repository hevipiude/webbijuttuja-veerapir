/**Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin) */

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
