import styles from './component.module.css';

const BillsAndRecharges = ({ data }) => {
  const { items = [], heading = '' } = data || {};

  return (
      <section>
        {heading && <h2>{heading}</h2>}
        <div class={styles.billsSection}>
        {items.map((item) => <a href={item.redirect}>
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