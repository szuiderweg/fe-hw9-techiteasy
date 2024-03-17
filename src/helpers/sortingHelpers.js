//voor de test importeer de array die later wordt meegegeven als argument vanuit app.jsx
// import {inventory} from "../constants/inventory.js";
import {topTvTitle,topTvPrice} from "./topTvHelpers.js";


export function bestSellingList(inventory){// OPDRACHT 3A
// doel: sorteer de inventory array op aantal verkochte tv's van hoog naar laag
//in: de inventory array
//uit: console log van de tv's (1e regel van de tv blokjes) op volgorde (dus eigenlijk void)
//stapjes:
//maak een nieuwe array voor de gesorteerde tv's
    let sortedTvs = inventory.slice();
//gebruik een sortmethod om de array te sorteren
    sortedTvs = sortedTvs.sort((b,a) => {
    return a.sold - b.sold;// b en a omgewisseld om te sorteren van hoog naar laag
    }); //a en b zijn een alias voor de entries (objecten) in inventory array

//log de tv's (in de stijl van bestsellingtv) in de console. Dat is nog niet zo makkelijk

//v2: gebruik een map method om het lijstje of te drukken in het bestTv titel format
const sortedTvsTitles =  sortedTvs.map(tv=> topTvTitle(tv) +" , sold:   "+tv.sold);
console.log("Meest verkocht eerst")
console.log(sortedTvsTitles );
}

//OPDR 3B
export function cheapestList(inventory){
//     doel: sorteer de tv's op prijs van laag naar hoog
    //in: de inventory array
//uit: Void: console log van de tv's (1e regel van de tv blokjes) op volgorde
    //stapjes:
    //1: maak een nieuwe array voor de gesorteerde tv's, want ik wil inventory niet  veranderen
    let sortedTvs = inventory.slice();

    //gebruik een sortmethod om de array te sorterenop prijs van laag naar hoog
    sortedTvs = sortedTvs.sort((a,b) => {
        return a.price - b.price;//
    }); //a en b zijn een alias voor de entries (objecten) in inventory array

    //v2: gebruik een map method een nieuwe array te maken met de titles en prijs van de gesorteerde tv's, beiden in hetzelfde format als de bestsellingtv
    const sortedTvsTitles =  sortedTvs.map(tv=> topTvTitle(tv) +" , price:   "+ topTvPrice(tv.price));
    //log de lijst met daarboven een titel
    console.log("Goedkoopste eerst")
    console.log(sortedTvsTitles );
}

export function SportTvList(inventory){// OPDRACHT 3C
// doel: sorteer de inventory array op verversingssnelheid van hoog naar laag
//in: de inventory array
//uit: console log van de tv's (1e regel van de tv blokjes) op volgorde (dus eigenlijk void) en de waarde van de verversingssnelheid
//stapjes:
//maak een nieuwe array voor de gesorteerde tv's
    let sortedTvs = inventory.slice();
//gebruik een sortmethod om de array te sorteren
    sortedTvs = sortedTvs.sort((b,a) => {
        return a.refreshRate - b.refreshRate;// b en a omgewisseld om te sorteren van hoog naar laag
    }); //a en b zijn een alias voor de entries (objecten) in inventory array

//log de tv's (in de stijl van bestsellingtv) in de console. Dat is nog niet zo makkelijk

//v2: gebruik een map method om het lijstje of te drukken in het bestTv titel format
    const sortedTvsTitles =  sortedTvs.map(tv=> topTvTitle(tv) +" , refreshrate:   "+tv.refreshRate+" Hz." );
    console.log("Meest geschikt voor sport eerst")
    console.log(sortedTvsTitles );
}




