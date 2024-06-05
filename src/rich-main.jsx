import { render } from "solid-js/web";
import { Banner, BillsAndRecharges, Categories, Footer, GridLayout, Header } from "./components";
import { ELECTRONIC_EMI_MOCK, INSURANCE_BAZAAR_MOCK, PARTNERS_MOCK, BILLS_AND_RECHARGES_MOCK, BANNER_MOCK, CATEGORIES_MOCK } from "./mocks";

const App = () => (
    <>
      <Header />
      <main>
        <Categories data={CATEGORIES_MOCK} />
        <BillsAndRecharges data={BILLS_AND_RECHARGES_MOCK} />
        <GridLayout data={ELECTRONIC_EMI_MOCK} />
        <GridLayout data={INSURANCE_BAZAAR_MOCK} />
        <Banner data={BANNER_MOCK} />
        <GridLayout data={PARTNERS_MOCK} />
      </main>
      <Footer/>
    </>
  );

render(() => <App />, document.getElementById("app"));
