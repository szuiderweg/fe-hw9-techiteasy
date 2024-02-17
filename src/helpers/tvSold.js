//in: het array "inventory"
//uit:  aantal verkochte tv's

export function tvSold(inventory, bestSellingTv){
    let tvSold = 0; //: maak een variabele voor het aantal verkochte tv's tvSold

    // haal voor ieder tv type de waarde voor 'sold' op en tel het op bij tvSold
    for(let n = 0 ; n<inventory.length;n++) {
        tvSold += inventory[n].sold;
    }
    tvSold+= bestSellingTv.sold;
    return tvSold;
}
