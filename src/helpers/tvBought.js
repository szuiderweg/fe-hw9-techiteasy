//in: het array "inventory"
//uit:  aantal ingekochte tv's

export function tvBought(inventory,bestSellingTv){
    let tvBought = 0; //: maak een variabele voor het aantal verkochte tv's tvSold

    // haal voor ieder tv type de waarde voor 'sold' op en tel het op bij tvSold
    for(let n = 0 ; n<inventory.length;n++) {
        tvBought += inventory[n].originalStock;
    }
    tvBought += bestSellingTv.originalStock;
    return tvBought;
}