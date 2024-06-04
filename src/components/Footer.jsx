import styles from './component.module.css';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.footerContent}>
        <div class={styles.footercolumn}>
          <h4>Corporate Office</h4>
          <p>6th Floor Bajaj Finserv Corporate Office, Off Pune-Ahmednagar Road, Viman Nagar, Pune - 411014</p>
        </div>
        <div class={styles.footercolumn}>
          <h4>Bajaj Finance Limited Regd. Office</h4>
          <p>Akurdi, Pune - 411035</p>
          <p>Ph No.: 020 7157-6403</p>
          <p>Email ID: investor.service@bajajfinserv.in</p>
          <p>Corporate Identity Number (CIN): L65910MH1987PLC042961</p>
          <p>IRDAI Corporate Agency (Composite) Regn No. CA0101 (Valid till 31-Mar-2025)</p>
          <p>URN - WEB/BFL/23-24/1/V1</p>
        </div>
        <div class={styles.footercolumn}>
          <h4>Bajaj Finserv Limited Regd. Office</h4>
          <p>Bajaj Auto Limited Complex Mumbai Pune - 411035 MH (IN)</p>
          <p>Ph No.: 020 7157-6064</p>
          <p>Email ID: investors@bajajfinserv.in</p>
          <p>Corporate Identity Number (CIN): L65923PN2007PLC130075</p>
        </div>
        <div class={styles.footercolumn}>
          <h4>Our Companies</h4>
          <p>Bajaj Finserv Ltd.</p>
          <p>Bajaj Finance Ltd.</p>
          <p>Bajaj Allianz General Insurance</p>
          <p>Bajaj Allianz Life Insurance</p>
          <p>Bajaj Finserv Markets</p>
          <p>Bajaj Housing Finance Ltd.</p>
          <p>Bajaj Broking</p>
          <p>Bajaj Finserv Health Ltd.</p>
        </div>
      </div>
      {/* <div class={styles.footer-bottom}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Android_logo_2019_%28stacked%29.svg" alt="Android" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
        </div>
        <div>
          <p>© Bajaj Finserv 2007-2024. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
   
  );
};

export default Footer;
