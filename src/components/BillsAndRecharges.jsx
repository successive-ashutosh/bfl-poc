import styles from './component.module.css';

const BillsAndRecharges = () => {
  return (
      <section>
        <h2>Bills and recharges</h2>
        <div class={styles.billsSection}>
        <a href="/bajajpay/bbps/?categoryId=5">
          <div class={styles.itemsContainer}>
            <img src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/mobile-recharge-3?scl=1&amp;fmt=png-alpha" alt="Mobile Recharge" loading="lazy" />
            <p class="items-wrapper__title fs-14-16">Mobile</p>
          </div>
        </a>
      
        <a  href="/bajajpay/bbps/?categoryId=4">
          <div class={styles.itemsContainer}>
            <img src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/electricity-22?scl=1&amp;fmt=png-alpha" alt="Electricity" loading="lazy" />
            
          <p class="items-wrapper__title fs-14-16">
            Electricity</p>
          </div>
        </a>
      
        <a href="/bajajpay/bbps/?categoryId=12">
          <div class={styles.itemsContainer}>
            <img src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/dth-recharge?scl=1&amp;fmt=png-alpha" alt="DTH" loading="lazy" />
            
          <p class="items-wrapper__title fs-14-16">
            DTH</p>
          </div>
        </a>
        <a href="/bajajpay/bbps/?categoryId=12">
          <div class={styles.itemsContainer}>
            <img src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/credit-card-bill?scl=1&fmt=png-alpha" alt="DTH" loading="lazy" />
            
          <p class="items-wrapper__title fs-14-16">
            Credit Card</p>
          </div>
        </a>
      </div>
      </section>
  )
}

export default BillsAndRecharges