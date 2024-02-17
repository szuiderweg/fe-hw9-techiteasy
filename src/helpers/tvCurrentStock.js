//in: het array "inventory"
//uit:  aantal verkochte tv's

import {tvBought} from "./tvBought.js";
import {tvSold} from "./tvSold.js";

export function tvCurrentStock(inventory,bestSellingTv){
    //te verkopen tv's = alle original stock minus alle verkochte tv's
    return tvBought(inventory,bestSellingTv) - tvSold(inventory,bestSellingTv);
}
