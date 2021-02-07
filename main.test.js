
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

document.getElementById("soldTV").value = totalInventoryToSell;

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
document.getElementById("AimToEarn").value = totalAimToEarn;

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

document.getElementById('earnedUntilNow').value = totalEarnedUntilNow;
