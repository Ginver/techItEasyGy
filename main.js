// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
// #### Opdracht 1
// * **Opdracht 1a:** Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

// - [ ] functie maken
// - [ ] aanroepen
// - [ ] parameter toevoegen (inventory)
// - [ ] inventory ingeven als argument
// - [ ] count variabele (buiten de loop)
// - [ ] loop maken (voor elke televisie)
// - [x] originalStock - sold optellen bij count
// - [x] Totaal return uit de functie

const countInventoryToSell = inventory.map((inventory) => {
  return inventory.originalStock - inventory.sold;
});
console.log(countInventoryToSell);

const totalInventoryToSell = countInventoryToSell.reduce((a, b) => a + b, 0);
// log totalInventoryToSell;
console.log(totalInventoryToSell);

// * **Opdracht 1b:** Zorg ervoor dat dit aantal _in het rood_ wordt weergegeven op de pagina
// #soldTV moet totalInventoryToSell weergeven

//  document.getElementById("soldTV").value = totalInventoryToSell;

  // #### Opdracht 2
// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// MAP -> ['fancy samsung', 'fancier samsung', 'lg big screen']
// - [x] maak variabele voor de uitkomst: allTvName
// - [x] inventory.map()
// - [x] geef een functie aan map als argument
// - [x] voeg de parameter toe (name)
// - [x] zoeken naar de juiste property
// - [x] return de juiste property (inventory.name)
// - [x] log het resultaat

const allTvName = inventory.map((inventory) => {
  return inventory.name;
});
console.log(allTvName);

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

// FILTER ->
// - [x] maak variabele voor de uitkomst (soldTvTypes)
// - [x] inventory.filter()
// - [x] geef een functie aan map als argument
// - [x] voeg de parameter toe (televisie, product)
// - [x] zoeken naar de juiste property
// - [x] check: is de televisie uitverkocht? true of false
// - [x] return true of false
// - [x] log het resultaat

const soldTvTypes = inventory.filter((inventory) => {
 return (inventory.originalStock === inventory.sold); // true of false geeft aan welke merken helemaal uitverkocht zijn
   });
console.log(soldTvTypes); // log je hoeveel tv's zijn verkocht per merk

const soldTvTypesName = soldTvTypes.map((soldTvType) => {
  return soldTvType.name; // alleen de namen mappen
});
console.log(soldTvTypesName);

// 2c
//* **Opdracht 2c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// - [x] maak variabele voor de uitkomst (hoeveel Ambilight)
// - [x] inventory.filter()
// - [x] geef een functie aan
// - [x] als ambilight true is
// - [x] zoeken naar de juiste property
// - [x] return de juiste property
// - [x] log het resultaat

// FILTER -> [{}, {}, {}],[{}, {}]
const AmbilightTv = inventory.filter((inventory) => {
  return inventory.ambilight = true; // true of false geeft aan welke merken hebben ambilight
});
console.log(AmbilightTv);

const AmbilightTvName = AmbilightTv.map((AmbilightTv) => {
  return AmbilightTv.name; // map alleen de namen van Tv's die ambilight hebben
});
console.log(AmbilightTvName);

//* **Opdracht 2d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

const TvPrices = inventory.sort((televisieA, televisieB) => {
  // console.log("hi", televisieA.price, televisieB.price);
  return televisieA.price - televisieB.price;
  console.log(difference);
  //  return difference;
})
console.log("sorted?", TvPrices);

// #### Opdracht 3
// * **Opdracht 3a:** Wat is onze doel-opbrengst?

// - [x] maak variabele voor de uitkomst: AimToEarn
// - [x] inventory.map()
// - [x] geef een functie aan map als argument
// - [x] voeg de parameter toe originalstock * price
// - [x] zoeken naar de juiste property
// - [x] return de juiste property
// - [x] log het resultaat

const AimToEarn = inventory.map((inventory) => {
  return inventory.originalStock * inventory.price;
});
console.log(AimToEarn);
// Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen.
const totalAimToEarn = AimToEarn.reduce((a, b) => a + b, 0);
// return totalInventoryToSell;
console.log(totalAimToEarn);

// Geef dit in het **blauw** weer op de pagina. #AimToEarn moet totalAimToEarn weergeven
// #AimToEarn veld weergeeft totalAimToEarn

// document.getElementById("AimToEarn").value = totalAimToEarn;

// * **Opdracht 6b:** Hoeveel hebben we tot nu toe verdient?
// - [x] maak variabele voor de uitkomst
// - [x] inventory.map()
// - [x] geef een functie aan map als argument
// - [x] voeg de parameter toe (sold * price)
// - [x] zoeken naar de juiste property
// - [x] return de juiste property
// - [x] log het resultaat

const EarnedUntilNow = inventory.map((inventory) => {
  return inventory.sold * inventory.price
});
console.log(EarnedUntilNow);

// reken de winst bij elkaar op van elke verkochte computers
const totalEarnedUntilNow = EarnedUntilNow.reduce((a, b) => a + b, 0);
// return totalInventoryToSell;
console.log(totalEarnedUntilNow);

// Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het **groen** weer op de pagina
// #earnedUntilNow weergeeft totaalEarnedUntilNow

// document.getElementById('earnedUntilNow').value = totalEarnedUntilNow;

// #### Opdracht 4
// Geef de type-namen van **twee** tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
// Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!
// We maken een lijst element in de HTML (ul)
// Die lijst krijgt een id in HTML
// nieuwe element aanmaken - createElement + appendChild 2x
// We maken 2 tv elementen (createElement)
// Daar zetten we de juiste tekst in (textContent, array[0], array[1])
// Plakken we de elementen op de pagina (appendChild)

const allTvBrandName = inventory.map((inventory) => {
  return inventory.brand + ' ' + inventory.name;
});
console.log(allTvBrandName); // we hebben nu alle TV merknamen



// #### Opdracht 5
// We gaan één van de twee tv's van de vorige opdracht weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//
//   NIKKEI NH3216SMART - HD smart TV
//   €159,-
//   32 inch (81 cm)
//   ```
//
// * **Opdracht 5a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
//     Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
//     Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
//
// * **Opdracht 5b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt.
//     Maak een functie die één tv-prijs als parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
//
// * **Opdracht 5c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm
// Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)` etc.
//     Dus een input van `[32]` geeft `32 inch (81 cm)` en een input van `[43, 50, 55, 58]` geeft `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken,
//     zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
//
// * **Opdracht 5d:** Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
// * **Opdracht 5e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven,
// om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
// //