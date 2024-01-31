// stappenplan voor helper opdracht 1a:
//in: het array inventory
//uit:  aantal verkochte tv's
//1: importeer het array inventory
//1b: tijdelijk: log het array in console
//2: maak een variabele voor het aantal verkochte tv's tvSold
//3: haal voor ieder tv type de waarde voor 'sold' op en tel het op bij tvSold (hoe heet dat ook alweer?)
//4: geef tvSold terug uit functie/ log in console

//nabewerking:
//consolelogs eruit halen
//functie opzetten volgens helper format

//import later verplaatsen naar app.jsx en inventory array meegeven als input aan de functie
import {inventory} from '../constants/inventory.js';
//console.log(inventory);
let tvSold = 0;
for(let n =0; n<inventory.length;n++)
{
    tvSold += inventory[n].sold;
    console.log(inventory[n].sold);
}
console.log("verkochte tv's: "+ tvSold );