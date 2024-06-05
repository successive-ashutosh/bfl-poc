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
          <h2 style="text-align: center; margin-bottom: 20px;">Bills and recharges</h2>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center; border-radius: 50px;" href="#">
              <h3>Mobile</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center; border-radius: 50px;" href="#">
              <h3>Electricity</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center; border-radius: 50px;" href="#">
              <h3>DTH</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center; border-radius: 50px;" href="#">
              <h3>Credit card</h3>
            </a>
          </div>
        </section>
        <section>
          <h2 style="text-align: center; margin-bottom: 20px;">Electronics on EMI</h2>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>ACs</h3>
              <p>Up to 30% off</p>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Smartphones</h3>
              <p>Up to 10% off</p>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>LED TVs</h3>
              <p>Up to 60% off</p>
            </a>
          </div>
          <div style="display: flex; justify-content: center;">
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Refrigerators</h3>
              <p>Up to 40% off</p>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Air Coolers</h3>
              <p>Up to 40% off</p>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; text-align: center;" href="#">
              <h3>Washing Machines</h3>
              <p>Up to 45% off</p>
            </a>
          </div>
        </section>
        <section>
          <h2 style="text-align: center; margin-bottom: 20px;">Insurance Bazaar</h2>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Health</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Car</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Bike</h3>
            </a>
          </div>
          <div style="display: flex; justify-content: center;">
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Wallet Protect</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; margin-right: 10px; text-align: center;" href="#">
              <h3>Personal Protect</h3>
            </a>
            <a style="background-color: #f2f2f2; padding: 20px; text-align: center;" href="#">
              <h3>Health Offers</h3>
            </a>
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