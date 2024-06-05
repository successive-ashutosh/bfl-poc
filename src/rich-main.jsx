import { render } from "solid-js/web";
import { BillsAndRecharges, Categories, Footer, GridLayout, Header } from "./components";


function App() {

  return (
    <div>
      <Header/>
      <main>
      <Categories />
      <BillsAndRecharges />
      <GridLayout
        data={{ items: [
          { title: 'ACs', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/acs-2?scl=1&amp;fmt=png-alpha', caption: 'Up to 30% off' },
          { title: 'Smartphones', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/smartphones-32?scl=1&fmt=png-alpha', caption: 'Up to 10% off' },
          { title: 'LED TVs', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/led-tvs-9?scl=1&fmt=png-alpha', caption: 'Up to 60% off' },
          { title: 'Refrigerators', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/refrigerators-18?scl=1&fmt=png-alpha', caption: 'Up to 40% off' },
          { title: 'Air coolers', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/air-cooler-13?scl=1&fmt=png-alpha', caption: 'Up to 40% off' },
          { title: 'Washing Machines', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/washing-machine-31?scl=1&fmt=png-alpha', caption: 'Up to 45% off' },
        ],
        heading: 'Electronics on EMI' 
      }}
    />
    <GridLayout
        data={{ items: [
          { title: 'Health', src: '	https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/health-v1-1?scl=1&fmt=png-alpha'},
          { title: 'Car', src: '	https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/car-v1-1?scl=1&fmt=png-alpha'},
          { title: 'Bike', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/bike-v1-1?scl=1&fmt=png-alpha'},
          { title: 'Wallet Protect', src: '	https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/wallet-protect-v1?scl=1&fmt=png-alpha'},
          { title: 'Personal Protect', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/personal-accident-cover-v1-2?scl=1&fmt=png-alpha'},
          { title: 'Health Offers', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/health-offers-v1?scl=1&fmt=png-alpha'},
        ],
        heading: 'Insurance Bazaar' 
      }}
    />
    <a href="https://www.bajajfinserv.in/credit-pass" style='display:block'>
        <picture style='display:block'>
          <source srcset="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/CIBIL1?scl=1&amp;fmt=png-alpha" media="(min-width: 1025px)" />
          <img src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/CIBIL17May?scl=1&amp;fmt=png-alpha" loading="lazy" style={{ width: '100%' }}/>
        </picture>
    </a>
    <GridLayout
        data={{ items: [
          { title: 'LG', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/lg-10?scl=1&fmt=png-alpha'},
          { title: 'Vivo', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-v1-1?scl=1&fmt=png-alpha'},
          { title: 'Oppo', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/oppo-v4?scl=1&fmt=png-alpha'},
          { title: 'Samsung', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/samsung-v5?scl=1&fmt=png-alpha'},
          { title: 'Voltas', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/voltas-v1-1?scl=1&fmt=png-alpha'},
          { title: 'Realme', src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/realme-7?scl=1&fmt=png-alpha'},
        ],
        heading: 'Our Brand Partners' 
      }}
    />
      </main>
      <Footer/>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));
