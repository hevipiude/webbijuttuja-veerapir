/**Luo funktio HenkTieto, joka palauttaa merkkijonona tiedon, onko henkilö nuori, aikuinen vai vanha.
Funktion parametri on ikä (käytä tässä parametria ika).
Jos ikä on < 18, henkilö on nuori.
Jos ikä on 18 - 65, henkilö on aikuinen.
Jos ikä on > 65, henkilö on vanhus.
Eli funktio palauttaa parametrin perusteella: nuori, aikuinen tai vanhus.
 */

var ika = 66;
console.log(HenkTieto(ika));

function HenkTieto(ika) {
  if (ika < 18) {
    return "nuori";
  } else if (ika >= 18 && ika <= 65) {
    return "aikuinen";
  } else {
    return "vanhus";
  }
}
