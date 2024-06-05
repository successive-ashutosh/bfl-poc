
import { createSignal } from 'solid-js';
import styles from './component.module.css';

const HorizontalScrollList = () => {
  const [items] = createSignal([
    { id: 1, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/all-6?scl=1&fmt=png-alpha', text: 'All' },
    { id: 2, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/loans-18?scl=1&fmt=png-alpha', text: 'Loans' },
    { id: 3, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/electronics-17?scl=1&fmt=png-alpha', text: 'Electronics' },
    { id: 3, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/cards-14?scl=1&fmt=png-alpha', text: 'Cards' },
    { id: 3, src: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/lifestyle-23?scl=1&fmt=png-alpha', text: 'LifeStyle' },
  ]);

  return (
    <div class={styles.container} >
      <div class={styles.scrollContainer}>
        {items().map(item => (
          <div key={item.id} class={styles.item}>
            <img src={item.src} alt={item.text} class={styles.image} />
            <p class={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HorizontalScrollList;
