import styles from './component.module.css';

const Header = () => {
    return (
        <header class={styles.header}>
            <div class={styles.headerWrapper}>
            <figure class={styles.logo}>
                <img src={'/logo.png'} alt="Bajaj Finserv" />
            </figure>
          
            <div class={styles.actions}>
                <span class={styles.signIn}>Sign In</span>
                <span class={styles.icon}><i class="fa fa-regular fa-user"></i></span>
                <span class={styles.icon}><i class="fa fa-regular fa-credit-card"></i></span>
                <span class={styles.icon}><i class="fa fa-regular fa-bell"></i></span>
                <span class={styles.icon}><i class="fa fa-solid fa-trophy"></i></span>
            </div>
            </div>
            <div class={styles.headersearch}>
                    <input type="text" placeholder="Search for loans and cards" class={styles.inputField} />
                    <span class={styles.searchIconBox}>
                    <i class="fa fa-solid fa-magnifying-glass"></i>
                        </span>
            </div>
            
            <div class={styles.headerCaption}>
                <span>BAJAJ FINANCE LIMITED</span>
            </div>
        </header>
    );
};

export default Header;
