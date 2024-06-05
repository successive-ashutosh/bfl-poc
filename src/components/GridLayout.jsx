import styles from './component.module.css';

const GridLayout = ({ data }) => {
  const { items, heading } = data || {};

  return (
    <section class={styles.billrecharge}>
      <h2>{heading}</h2>
      <div class={styles.gridLayout}>
        {items.map((item) => <a class={styles.gridAnchor}>
          <div class={styles.gridItemContainer}>
          <img class={styles.gridImage} src={item.src} alt={item.title} loading="lazy" /> 
          </div>
          <p>{item.title}</p>
          <p>{item.caption}</p>
        </a>)}
      </div>
    </section>
  )
}

export default GridLayout;
