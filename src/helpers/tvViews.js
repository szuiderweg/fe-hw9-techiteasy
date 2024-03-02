import {bestSellingTv, inventory} from "../constants/inventory.js";

//1a -Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.
console.log(inventory);//test of inventory array goed binnenkomt

const tvTypes = inventory.map(tv=> tv.type);
console.log(tvTypes);

//1b Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.
//tv is uitverkocht wanneer het aantal verkochte tv's gelijk is aan de original stock
const soldOuts= inventory.filter(tv => {
    return tv.sold === tv.originalStock;});
console.log("these tv's are sold out");
console.log(soldOuts);
//1c Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen. > gebruik de find arraymethod
const specialType = inventory.find(tv => tv.type=== 'NH3216SMART');
console.log("special tv: ")
console.log(specialType);

// Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.
// oplossing: map method met een if statement erin en het gewenste format
const sportTvs = inventory.map(tv => {
    let sport = false;
    if(tv.refreshRate >= 100){
        sport = true;
    }
    return `name: ${tv.brand} ${tv.name} , suitable: ${sport} `;
});
console.log("sport tv's")
console.log(sportTvs);

//Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter
//> gebruik een filter met daarbinnen een lus
const bigTv = inventory.filter(tv =>{
//if availablesizes bevat groter of gelijk aan 65 > geef true terug. hiervoor heb ik geen kant en klare method gevonden helaas
    //loop door het array tv.availables sizes,
    for(let n = 0; n< tv.availableSizes.length; n++) {
        if (tv.availableSizes[n] >= 65) {
            return true;//als een entry waarde groot genoeg is, return true voor het filter
        }
    }
    return false;//na de loop niks gevonden, return dan false
});
console.log("grote tv's")
console.log(bigTv);//

//1f : Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console
//zie opdr 1e
//in: inventory array
//uit: tv's waarbij de optie "ambilight" op "true" staat
//de options staan in een array van objecten in een aray van objecten.
//gebruik een filter met daarin een loop die het options array door loopt
//als options name === ambilight && applicable === true, stop de tv in het gefilterde array

//om te beginnen spuug true/false uit van de tv's of die ambilight hebben
console.log("heeft ambilight:")

const ambi = inventory.filter(tv =>{
    for(let k = 0; k<tv.options.length;k++){
        if(tv.options[k].name==="ambiLight" && tv.options[k].applicable){
            return true;
        }
    }
    return false;
});
console.log(ambi);