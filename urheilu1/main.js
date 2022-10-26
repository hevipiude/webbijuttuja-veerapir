//import { firstNames, lastName, nickName, birthYear } from "./henkilo";

import { henkilo } from "./henkilo.js";
import { urheilija } from "./henkilo.js";

console.log();
var veera = new henkilo("Veera Katariina", "Pirttilahti", "Veera", "1996");
console.log(veera.toString());
console.log();
var pete = new henkilo("Petri Kristian Johannes", "Ranta", "Pete", "1994");
console.log(pete.toString());
console.log();
var bubi = new henkilo("Buubersson", "Kissanen", "Bubi", "2016");
console.log(bubi.toString());

var veeraUrh = new urheilija(
  veera.firstNames,
  veera.lastName,
  veera.nickName,
  veera.birthYear,
  "Tähän linkki kuvaan",
  "80 kg",
  "pötköttely",
  "ei mitään"
);

var peteUrh = new urheilija(
  pete.firstNames,
  pete.lastName,
  pete.nickName,
  pete.birthYear,
  "Tähän linkki kuvaan",
  "ei tiedossa",
  "kitarointi",
  "hyvä syömään"
);

var bubiUrh = new urheilija(
  bubi.firstNames,
  bubi.lastName,
  bubi.nickName,
  bubi.birthYear,
  "Tähän linkki kuvaan",
  "6 kg",
  "maukuminen",
  "taitava poikanen 2022"
);

veeraUrh.accomplishments = "kisujen pesupalkinto";
console.log(veeraUrh.toString());
console.log(peteUrh.toString());
console.log(bubiUrh.toString());

const u3 = new urheilija(
  "Aku",
  "Ankka",
  "Aku",
  new Date("1995"),
  "",
  70,
  "karate",
  "2. sija 2020"
);

console.log(u3.toString());
