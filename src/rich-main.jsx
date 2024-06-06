import { render } from "solid-js/web";
import { createSignal, lazy, Suspense } from "solid-js";

import { ELECTRONIC_EMI_MOCK, INSURANCE_BAZAAR_MOCK, PARTNERS_MOCK, BILLS_AND_RECHARGES_MOCK, BANNER_MOCK, CATEGORIES_MOCK, CAROUSEL_MOCK } from "./mocks";


import useIntersection from "./hooks/useIntersection";
import Loader from "./components/Loader";

const Banner = lazy(() => import("./components/Banner"));
const BillsAndRecharges = lazy(() => import("./components/BillsAndRecharges"));
const Categories = lazy(() => import("./components/Categories"));
const Footer = lazy(() => import("./components/Footer"));
const GridLayout = lazy(() => import("./components/GridLayout"));
const Header = lazy(() => import("./components/Header"));
const Carousel = lazy(() => import("./components/Carousal"));

const App = () => {
  const [footerRef, setFooterRef] = createSignal();
  const [bannerRef, setBannerRef] = createSignal();
  const [gridRef, setGridRef] = createSignal();
  const isFooterOnViewport = useIntersection(footerRef);
  const isBannerOnViewport = useIntersection(bannerRef);
  const isGridLayoutOnViewport = useIntersection(gridRef);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <main>
        <Suspense fallback={<Loader />}>
          <Categories data={CATEGORIES_MOCK} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Carousel images={CAROUSEL_MOCK} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <BillsAndRecharges data={BILLS_AND_RECHARGES_MOCK} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <div style={{ paddingTop: '10px' }} ref={setGridRef}>
            {isGridLayoutOnViewport() && <GridLayout data={ELECTRONIC_EMI_MOCK} />}
          </div>
        </Suspense>
        <Suspense fallback={<Loader />}>
          {isGridLayoutOnViewport() && <GridLayout data={INSURANCE_BAZAAR_MOCK} />}
        </Suspense>
        <Suspense fallback={<Loader />}>
          <div style={{ padding: '10px' }} ref={setBannerRef}>
            {isBannerOnViewport() && <Banner data={BANNER_MOCK} />}
          </div>
        </Suspense>
        <Suspense fallback={<Loader />}>
          {isGridLayoutOnViewport() && <GridLayout data={PARTNERS_MOCK} />}
        </Suspense>
      </main>
      <Suspense fallback={<Loader />}>
        <div style={{ height: '10px' }} ref={setFooterRef}>
          {isFooterOnViewport() && <Footer />}
        </div>
      </Suspense>
    </>
  )
};

render(() => <App />, document.getElementById("app"));
