import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import {tvSold} from './helpers/tvSold.js';
import {tvBought} from './helpers/tvBought.js';
import {tvCurrentStock} from './helpers/tvCurrentStock.js';
import {topTvPrice, topTvTitle, topTvSize} from './helpers/topTvHelpers.js';
//todo import van arrayhelpers
import check from './assets/check.png';
import minus from './assets/minus.png';
import {bestSellingList, cheapestList, SportTvList} from "./helpers/sortingHelpers.js";

function App() {
  return (
  <>
      <header>
        <h1>Tech it easy dashboard</h1>
      </header>
      <main>
        <section>
            <h2>Verkoopoverzicht</h2>
            <div className="salesOverview">
                {/*done: ook de bestselling tv meetellen!*/}
                <article id={"ovGreen"}>
                    <h3>Aantal verkochte producten</h3>

                    <p>{tvSold(inventory,bestSellingTv)}</p>
                </article>

                <article id={"ovBlue"}>
                    <h3>Aantal ingekochte producten</h3>
                    <p>{tvBought(inventory,bestSellingTv)}</p>
                </article>

                <article id={"ovOrange"}>
                    <h3>Aantal te verkopen producten</h3>
                    <p>{tvCurrentStock(inventory,bestSellingTv)}</p>
                </article>
            </div>
        </section>
        <section>
            <h2>Best verkochte tv</h2>
            <article className="bestTv">
                <div><img src={bestSellingTv.sourceImg} alt="tv-plaatje" className="tvImg"/></div>
                <div className="tvSpecs">
                      <p>{topTvTitle(bestSellingTv)}</p>
                      <p>{topTvPrice(bestSellingTv.price)}</p>
                      <p>{topTvSize(bestSellingTv)}</p>
                      <ul>
                          <li><img src={check} alt="check" className="check"/> <p>wifi</p></li>
                          <li><img src={minus} alt="check" className="check"/> <p>speech</p></li>
                          <li><img src={check} alt="check" className="check"/> <p>hdr</p></li>
                          <li><img src={check} alt="check" className="check"/> <p>bluetooth</p></li>
                          <li><img src={minus} alt="check" className="check"/> <p>ambilight</p></li>
                      </ul>
                </div>
            </article>
        </section>
        {/* section voor buttons en lijsten */}
        <section>
            <h2>Alle TV's</h2>
        <div className="sortButtons">
            <button type="button" onClick={() => bestSellingList(inventory)}>Meest verkocht eerst</button>
            <button type="button" onClick={() => cheapestList(inventory)}>Goedkoopste eerst</button>
            <button type="button" onClick={() => SportTvList(inventory)}>Meest geschikt voor sport eerst</button>
          </div>
      {/*  todo  hier komt de content met arrayfunctions*/}
      {/*      eerst maar dezelfde classes als de bestselling tv */}

        {/*eens kijken of de model naam als unieke id gebruikt kan worden*/}
            <ul>
                {inventory.map(tv =>{
                    return <li className="allTvsLi" key={tv.type}>
                        <article className="allTvs">
                            <div><img src={tv.sourceImg} alt="tv-plaatje" className="tvImg"/></div>
                            <div>
                                <p>{topTvTitle(tv)}</p>
                                <p>{topTvPrice(tv.price)}</p>
                                <p>{topTvSize(tv)}</p>
                                {/*nested map method om de options weer te geven*/}
                                <ul className="optionsList">
                                    {/*aanroepen van de options: we zitten al in een mapping van de tv's uit inventory. Dus de options bereik je via tv.options*/}
                                    {tv.options.map(option => {
                                        if(option.applicable === true){
                                        return <li className="allTvsLi" key={option.name}>{`${option.name}`} <img src={check} alt="check" className="check"/></li>
                                        }
                                        return <li className="allTvsLi" key={option.name}>{`${option.name}`} <img src={minus} alt="check" className="check"/></li>
                                    })}
                                </ul>
                            </div>
                        </article>
                    </li>//ik gebruik type name als unieke id//list van tv's
                })}
            </ul>




        </section>
      </main>
  </>
  )
}

export default App
