

export function topTvTitle(bestSellingTv) {
//in: het object "bestSellingTv"
//uit: fraaie String topTvTitle = [merk] [type] - [naam]

//laat ik het eens met template literals proberen
  return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`
}

 // //tijdelijk test gedeelte
 // import {bestSellingTv} from '../constants/inventory.js';
 //
 // console.log(topTvTitle(bestSellingTv));