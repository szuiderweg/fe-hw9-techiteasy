import {inventory} from "../constants/inventory.js";

//1a -Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.
console.log("test"+inventory);

const typeNames = inventory.map(tv => tv.type);
console.log(typeNames);

