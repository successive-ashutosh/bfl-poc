import { createSignal } from 'solid-js';
import styles from './component.module.css';

const BillsAndRecharges = () => {
  const [items] = createSignal([
    { id: 1, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/mobile-recharge-3?scl=1&amp;fmt=png-alpha', text: 'Mobile' },
    { id: 2, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/electricity-22?scl=1&amp;fmt=png-alpha', text: 'Electricity' },
    { id: 3, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/dth-recharge?scl=1&amp;fmt=png-alpha', text: 'DTH' },
    { id: 4, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/credit-card-bill?scl=1&fmt=png-alpha', text: 'Credit Card' },
  ]);
  return (
      <section>
        <h2>Bills and recharges</h2>
        <div class={styles.billsSection}>
        {items().map((item) => <a href="/bajajpay/bbps/?categoryId=5">
          <div class={styles.itemsContainer}>
            <img src={item.src} alt={item.text} loading="lazy" />
            <p class="items-wrapper__title fs-14-16">{item.text}</p>
          </div>
        </a>)}
      </div>
      </section>
  )
}

export default BillsAndRecharges