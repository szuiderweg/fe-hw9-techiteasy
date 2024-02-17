import './App.css';
import {inventory, bestSellingTv} from './constants/inventory.js';
import {tvSold} from './helpers/tvSold.js';
import {tvBought} from './helpers/tvBought.js';
import {tvCurrentStock} from './helpers/tvCurrentStock.js';
import {topTvPrice, topTvTitle, topTvSize} from './helpers/topTvHelpers.js';
import check from './assets/check.png';
import minus from './assets/minus.png';

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
        <div className="sortButtons">
            <button type="button" onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => console.log("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
          </div>
      </main>
  </>
  )
}

export default App
