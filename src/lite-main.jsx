import { render } from "solid-js/web";
import { FooterCms } from "./cms/footerCms";
import { HeaderCms } from "./cms/headerCms";
import { liteContent } from "./mocks/liteContent";

const App = () => {
  return (
    <div>
      <header class="header">
        <img src="/logo.png" alt="Bajaj Finserv" />
        <span>{HeaderCms.HEADER_TITLE}</span>
      </header>

   <main style={{ minHeight: 'calc(100vh - 250px)' }}>
      {liteContent.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <div className="badge-container">
            {section.badges.map((badge, badgeIndex) => (
              <div className="badge badge-round" key={badgeIndex}>
                <h3>{badge.title}</h3>
                {badge.subtitle && <p>{badge.subtitle}</p>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
      <footer className="footer">
      <div className="footerContent">
        <div className="footercolumn">
          <h4>{FooterCms.CORPORATE_OFFICE.title}</h4>
          <p>{FooterCms.CORPORATE_OFFICE.address}</p>
        </div>
        <div className="footercolumn">
          <h4>{FooterCms.BAJAJ_FINANCE_LIMITED.title}</h4>
          <p>{FooterCms.BAJAJ_FINANCE_LIMITED.address}</p>
          <p> {FooterCms.BAJAJ_FINANCE_LIMITED.phone}</p>
          <p>{FooterCms.BAJAJ_FINANCE_LIMITED.email}</p>
          <p> {FooterCms.BAJAJ_FINANCE_LIMITED.cin}</p>
          <p>{FooterCms.BAJAJ_FINANCE_LIMITED.irda}</p>
          <p>{FooterCms.BAJAJ_FINANCE_LIMITED.urn}</p>
        </div>
        <div className="footercolumn">
          <h4>{FooterCms.BAJAJ_FINSERV_LIMITED.title}</h4>
          <p>{FooterCms.BAJAJ_FINSERV_LIMITED.address}</p>
          <p>{FooterCms.BAJAJ_FINSERV_LIMITED.phone}</p>
          <p>{FooterCms.BAJAJ_FINSERV_LIMITED.email}</p>
          <p> {FooterCms.BAJAJ_FINSERV_LIMITED.cin}</p>
        </div>
        <div className="footercolumn">
          <h4>{FooterCms.OUR_COMPANIES.title}</h4>
          {FooterCms.OUR_COMPANIES.companies.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </div>
      </div>
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

  .footer {
    background-color: #002d62;
    color: #ffffff;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
  
  .footercolumn {
    flex: 1;
    min-width: 200px;
    margin: 10px;
    font-size: 12px;
  }
  
  .footercolumn h4 {
    margin-bottom: 15px;
    font-size: 16px;
  }
  
  .footercolumn p,
  .footercolumn a {
    margin: 5px 0;
    color: #ffffff;
    text-decoration: none;
  }
  
  .footerContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footerbottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ffffff;
    padding-top: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  
  .footerbottom img {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }
  
  .footerbottom div {
    display: flex;
    align-items: center;
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
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .badge-round {
    border-radius: 10px;
    margin: 0 5px 10px;
    width: calc(100% / 3 - 50px);

  }

  .badge:hover {
    background-color: #002d62;
    color: #fff;
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