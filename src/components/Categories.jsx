import styles from './component.module.css';

const HorizontalScrollList = ({ data }) => {
  const { items = [] } = data || {};

  return (
    <div class={styles.container} >
      <div class={styles.scrollContainer}>
        {items.map(item => (
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
