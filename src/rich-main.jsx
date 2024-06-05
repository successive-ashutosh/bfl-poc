import { render } from "solid-js/web";
import { lazy } from "solid-js";

import { ELECTRONIC_EMI_MOCK, INSURANCE_BAZAAR_MOCK, PARTNERS_MOCK, BILLS_AND_RECHARGES_MOCK, BANNER_MOCK, CATEGORIES_MOCK, CAROUSEL_MOCK } from "./mocks";

const Banner = lazy(() => import("./components/Banner"));
const BillsAndRecharges = lazy(() => import("./components/BillsAndRecharges"));
const Categories = lazy(() => import("./components/Categories"));
const Footer = lazy(() => import("./components/Footer"));
const GridLayout = lazy(() => import("./components/GridLayout"));
const Header = lazy(() => import("./components/Header"));
const Carousel = lazy(() => import("./components/Carousal"));

const App = () => (
    <>
      <Header />
      <main>
        <Categories data={CATEGORIES_MOCK} />
        <Carousel images={CAROUSEL_MOCK} />
        <BillsAndRecharges data={BILLS_AND_RECHARGES_MOCK} />
        <GridLayout data={ELECTRONIC_EMI_MOCK} />
        <GridLayout data={INSURANCE_BAZAAR_MOCK} />
        <Banner data={BANNER_MOCK} />
        <GridLayout data={PARTNERS_MOCK} />
      </main>
      <Footer />
    </>
  );

render(() => <App />, document.getElementById("app"));
