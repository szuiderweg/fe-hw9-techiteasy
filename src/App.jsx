import './App.css';

function App() {
  return (
  <>
      <header>
        <h1>Tech it easy dashboard</h1>
      </header>
      <main>
        <section>
            <h2>Verkoopoverzicht</h2>
            <div>
                <article>
                    <h3>Aantal verkochte producten</h3>
                    <p>##</p>
                </article>

                <article>
                    <h3>Aantal ingekochte producten</h3>
                    <p>##</p>
                </article>

                <article>
                    <h3>Aantal te verkopen producten</h3>
                    <p>##</p>
                </article>
            </div>
        </section>

          <section>
              <h2>Best verkochte tv</h2>
              <article>
                  <div><img src="/" alt="tv"/></div>
                  <div>
                      <p>productnaam</p>
                      <p>prijs</p>
                      <p>afmetingen</p>
                      <p>feature bolletjes</p>
                  </div>
              </article>
          </section>
      </main>
  </>
  )
}

export default App
