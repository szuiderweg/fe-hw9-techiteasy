export function topTvTitle(bestSellingTv) {
//in: het object "bestSellingTv"
//uit: fraaie String topTvTitle in het format: [merk] [type] - [naam]

//laat ik de string eens met template literals bouwen
  return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`
}

export function topTvPrice(price) {
//in: een integer
//uit: prijs in format € ${price},-
  return `€${price},-`
}

export function topTvSize(tv){
  //in: een tv object: bv de bestSellingTv of een tv uit  inventory
  //uit: een string met alle afmetingen in inches en omgerekend naar cm

  //aanpak: we gaan werken met een String die iedere met iteratie van de for-loop groeit door een beschikbare schermgrootte aan toe te voegen in het gewenste format.

  //stap1: maak een String sizeOptions aan waar de output in komt te staan
  let sizeOptions = "";

  //2: voor alle afmetingen in het array availableSizes:
  for(let n = 0; n < tv.availableSizes.length;n++){

    //3: iedere iteratie behalve de eerste begint met " | " .
    if(n > 0){
      sizeOptions += " | ";
    }

    //4: converteer n-de schermgrootte naar een string en voeg toe aan sizeOptions
    sizeOptions += tv.availableSizes[n].toString();

    //5: voeg " inch (" toe aan sizeOptions
    sizeOptions += " inch (";

    //6: reken inches om naar cm en rond af naar integer. 1 inch = 2.54 centimeter. converteer  vervolgens naar String en voeg toe aan de grote Sizeoptions string
    sizeOptions += Math.round(tv.availableSizes[n]*2.54).toString();

    //7: voeg " )" toe aan sizeOptions
    sizeOptions += " cm)";
  }// einde for-loop

  return sizeOptions;
}