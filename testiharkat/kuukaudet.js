var kuukaudet = [
  { nimi: "tammikuu", numero: 0 },
  { nimi: "helmikuu", numero: 1 },
  { nimi: "maaliskuu", numero: 2 },
  { nimi: "huhtikuu", numero: 3 },
  { nimi: "toukokuu", numero: 4 },
  { nimi: "kesäkuu", numero: 5 },
  { nimi: "heinäkuu", numero: 6 },
  { nimi: "elokuu", numero: 7 },
  { nimi: "syyskuu", numero: 8 },
  { nimi: "lokakuu", numero: 9 },
  { nimi: "marraskuu", numero: 10 },
  { nimi: "joulukuu", numero: 11 },
];

var kk = 11;

while (kk >= 0) {
  console.log(naytaKk(kuukaudet, kk));
  kk--;
}

function naytaKk(taulu, numero) {
  var x = taulu.find((x) => x.numero === numero);
  return x.nimi;
}
