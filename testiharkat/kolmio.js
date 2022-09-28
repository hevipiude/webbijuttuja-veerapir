/**Luo javascripti jossa kysyt kolmion kannan (käytä kanta - muuttujaa){" "}
ja kolmion korkeuden (käytä korkeus - muuttujaa).
Laske kolmion pinta-ala (=kanta*korkeus/2). Sijoita kolmion pinta-ala
muuttujaan pinta_ala. Tulosta lopulta pinta-ala muuttujan sisältö.{" "} */

var input = require("readline-sync");

var kanta = input.question("Anna kanta:");
var korkeus = input.question("Anna korkeus:");
var pinta_ala = (kanta * korkeus) / 2;

var kolmio = { kanta, korkeus, pinta_ala };

console.log("Antamasi kolmion pinta-ala: " + kolmio.pinta_ala);
