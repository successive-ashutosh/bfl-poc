import { render } from "solid-js/web";

function App() {
  return (
    <div>
      <header style='background-color:#002d62; height:100px; margin:-10px; display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;'>
      <img style="width:30%; padding: 10px" src={'/logo.png'} alt="Bajaj Finserv" />
        <span style='color:#ffffff; font-size:12px'>BAJAY FINANCE LIMITED</span>
      </header>
      <main>
        <section>
          <h2 style="text-align: center; margin-bottom: 20px;">Electronics on EMI</h2>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <div style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;">
              <h3>ACs</h3>
              <p>Up to 30% off</p>
            </div>
            <div style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;">
              <h3>Smartphones</h3>
              <p>Up to 10% off</p>
            </div>
            <div style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;">
              <h3>LED TVs</h3>
              <p>Up to 60% off</p>
            </div>
          </div>
          <div style="display: flex; justify-content: center;">
            <div style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;">
              <h3>Refrigerators</h3>
              <p>Up to 40% off</p>
            </div>
            <div style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;">
              <h3>Air Coolers</h3>
              <p>Up to 40% off</p>
            </div>
            <div style="background-color: #f2f2f2; padding: 20px; text-align: center;">
              <h3>Washing Machines</h3>
              <p>Up to 45% off</p>
            </div>
          </div>
        </section>
      </main>
      <footer style='background-color:#002d62; height:100px'>
       <h1 style={{color:'#ffffff', padding:'20px'}}> This is Footer</h1>
      </footer>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));