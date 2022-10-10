import { firstNames, lastName, nickName, birthYear } from "./henkilo";

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
