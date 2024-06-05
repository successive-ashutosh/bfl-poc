import { render } from "solid-js/web";

const App = () => {
  return (
    <div>
      <header class="header">
        <img src="/logo.png" alt="Bajaj Finserv" />
        <span>BAJAY FINANCE LIMITED</span>
      </header>
      <main style='min-height:calc(100vh - 250px)'>
        <section>
          <h2>Bills and recharges</h2>
          <div class="badge-container">
            <div class="badge badge-round">
              <h3>Mobile</h3>
            </div>
            <div class="badge badge-round">
              <h3>Electricity</h3>
            </div>
            <div class="badge badge-round">
              <h3>DTH</h3>
            </div>
            <div class="badge badge-round">
              <h3>Credit card</h3>
            </div>
          </div>
        </section>
        <section>
          <h2>Electronics on EMI</h2>
          <div class="badge-container">
            <div class="badge badge-round">
              <h3>ACs</h3>
              <p>Up to 30% off</p>
            </div>
            <div class="badge badge-round">
              <h3>Smartphones</h3>
              <p>Up to 10% off</p>
            </div>
            <div class="badge badge-round">
              <h3>LED TVs</h3>
              <p>Up to 60% off</p>
            </div>
         
            <div class="badge badge-round">
              <h3>Refrigerators</h3>
              <p>Up to 40% off</p>
            </div>
            <div class="badge badge-round">
              <h3>Air Coolers</h3>
              <p>Up to 40% off</p>
            </div>
            <div class="badge badge-round">
              <h3>Washing Machines</h3>
              <p>Up to 45% off</p>
          </div>
          </div>
        </section>
        <section>
          <h2>Insurance Bazaar</h2>
          <div class="badge-container">
            <div class="badge badge-round">
              <h3>Health</h3>
            </div>
            <div class="badge badge-round">
              <h3>Car</h3>
            </div>
            <div class="badge badge-round">
              <h3>Bike</h3>
            </div>
            <div class="badge badge-round">
              <h3>Wallet Protect</h3>
            </div>
            <div class="badge badge-round">
              <h3>Personal Protect</h3>
            </div>
            <div class="badge badge-round">
              <h3>Health Offers</h3>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <h1>This is Footer</h1>
      </footer>
    </div>
  );
};

const style = `
body {
  font-family: system-ui;
}
  .header {
    background-color: #002d62;
    height: 100px;
    margin: -10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  .header img {
    width: 120px;
    padding: 10px;
  }

  .header span {
    color: #ffffff;
    font-size: 12px;
  }

  h2 {
    text-align: center;
    margin: 25px 0;
  }

  .badge-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap:wrap;
    justify-content:center;
  }

  .badge {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }

  .badge-round {
    border-radius: 10px;
    margin: 0 5px 10px;
    width: calc(100% / 3 - 50px);

  }

  .badge:hover {
    transform: scale(1.1);
  }

  .footer {
    background-color: #002d62;
    height: 100px;
  }

  .footer h1 {
    color: #ffffff;
    padding: 20px;
  }

  @media (max-width: 599px) {
    .badge-round {
      width: calc(100% / 2 - 50px);
  
    }
  }

  @media (max-width: 400px) {
    .badge-container {
      flex-direction: column;
      align-items: center;
    }

    .badge {
      width: 80%;
      margin: 5px 0;
    }
  }

`;

render(() => <App />, document.getElementById("app"));

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);