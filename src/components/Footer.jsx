import { FooterCms } from '../cms/footerCms';
import styles from './component.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footercolumn}>
        <h4>{FooterCms.CORPORATE_OFFICE.title}</h4>
        <p>{FooterCms.CORPORATE_OFFICE.address}</p>
      </div>
      <div className={styles.footercolumn}>
        <h4>{FooterCms.BAJAJ_FINANCE_LIMITED.title}</h4>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.address}</p>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.phone}</p>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.email}</p>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.cin}</p>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.irda}</p>
        <p>{FooterCms.BAJAJ_FINANCE_LIMITED.urn}</p>
      </div>
      <div className={styles.footercolumn}>
        <h4>{FooterCms.BAJAJ_FINSERV_LIMITED.title}</h4>
        <p>{FooterCms.BAJAJ_FINSERV_LIMITED.address}</p>
        <p>{FooterCms.BAJAJ_FINSERV_LIMITED.phone}</p>
        <p>{FooterCms.BAJAJ_FINSERV_LIMITED.email}</p>
        <p>{FooterCms.BAJAJ_FINSERV_LIMITED.cin}</p>
      </div>
      <div className={styles.footercolumn}>
        <h4>{FooterCms.OUR_COMPANIES.title}</h4>
        {FooterCms.OUR_COMPANIES.companies.map((company, index) => (
          <p key={index}>{company}</p>
        ))}
      </div>
    </div>
  </footer>
   
  );
};

export default Footer;
