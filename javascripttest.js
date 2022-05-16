let brood = 1;
let melk = 1;
let groente = 3;
let kip = 2;
let chips = 1.5;

let aantalBrood = Number(prompt("Hoeveel brood?"));
let aantalMelk = Number(prompt("Hoeveel melk?"));
let aantalGroente = Number(prompt("Hoeveel groente?"));
let aantalKip = Number(prompt("Hoeveel kip?"));
let aantalChips = Number(prompt("Hoeveel chips?"));

let totaal = brood * aantalBrood + melk * aantalMelk + groente * aantalGroente + kip * aantalKip + chips * aantalChips;

let gemiddeld = totaal / (aantalBrood + aantalMelk + aantalGroente + aantalKip + aantalChips);

document.write(" brood:" + brood);
document.write(" aantalBrood:" + aantalBrood);
document.write(" melk:" + melk);
document.write(" aantalMelk:" + aantalMelk);
document.write(" groente:" + groente);
document.write(" aantalGroente:" + aantalGroente);
document.write(" kip:" + kip);
document.write(" aantalKip:" + aantalKip);
document.write(" chips:" + chips);
document.write(" aantalChips:" + aantalChips);
document.write(" totaal:" + totaal);
document.write(" gemiddeld:" + gemiddeld);

document.write(" TOTAAL AANTAL PRODUCTEN:" + (aantalBrood + aantalMelk + aantalGroente + aantalKip + aantalChips));