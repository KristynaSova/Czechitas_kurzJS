let vstup = Number(prompt('Zadej mi cislo co neni nula'));
let soucet = 0;
while (vstup !== 0) {
  vstup = Number(prompt('Zadej mi cislo co neni nula'));
  soucet = soucet + vstup;
  console.log('Celkovy soucet:' + soucet);
}

console.log('Celkovy soucet:' + soucet);
