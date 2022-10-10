class henkilo {
  constructor(firstNames, lastName, nickName, birthYear) {
    this.firstNames = firstNames;
    this.lastName = lastName;
    this.nickName = nickName;
    this.birthYear = birthYear;
  }

  get firstNames() {
    return this._firstNames;
  }
  get lastName() {
    return this._lastName;
  }
  get nickName() {
    return this._nickName;
  }
  get birthYear() {
    return this._birthYear;
  }
  get fullName() {
    return this._firstNames + " " + this._lastName;
  }
  get age() {
    return 2022 - this.birthYear;
  }
  set firstNames(x) {
    this._firstNames = x;
  }
  set lastName(x) {
    this._lastName = x;
  }
  set nickName(x) {
    this._nickName = x;
  }
  set birthYear(x) {
    this._birthYear = x;
  }

  toString() {
    return this.fullName + ", " + this.nickName + ", " + this.birthYear;
  }
}

class urheilija extends henkilo {
  constructor(firstNames, lastName, nickName, birthYear, pic, w, sport, acc) {
    super(firstNames, lastName, nickName, birthYear);
    this.picture = pic;
    this.weight = w;
    this.sport = sport;
    this.accomplishments = acc;
  }

  get picture() {
    return this._picture;
  }
  get weight() {
    return this._weight;
  }
  get sport() {
    return this._sport;
  }
  get accomplishments() {
    return this._accomplishments;
  }
  set picture(x) {
    this._picture = x;
  }
  set weight(x) {
    this._weight = x;
  }
  set sport(x) {
    this._sport = x;
  }
  set accomplishments(x) {
    this._accomplishments = x;
  }
  toString() {
    return (
      "\nnimi: " +
      this.firstNames +
      " " +
      this.lastName +
      "\nlempinimi: " +
      this.nickName +
      "\nsyntymavuosi: " +
      this.birthYear +
      "\nkuva: " +
      this.picture +
      "\npaino: " +
      this.weight +
      "\nlaji: " +
      this.sport +
      "\nsaavutukset: " +
      this.accomplishments
    );
  }
}

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
