export function topTvTitle(bestSellingTv) {
//in: het object "bestSellingTv"
//uit: fraaie String topTvTitle = [merk] [type] - [naam]

//laat ik de string eens met template literals bouwen
  return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`
}

export function topTvPrice(price) {
//in: een integer
//uit: prijs van tv in format € ${price},-
  return `€${price},-`
}
