import { HeaderCms } from '../cms/headerCms';
import styles from './component.module.css';

const Header = () => {
    return (
        <header class={styles.header}>
            <div class={styles.headerWrapper}>
            <figure class={styles.logo}>
                <img src={'/logo.png'} alt={HeaderCms.LOGO_ALT} />
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
                    <i class="fas fa-search fa-fw"></i>
                        </span>
            </div>
            
            <div class={styles.headerCaption}>
                <span>{HeaderCms.HEADER_TITLE}</span>
            </div>
        </header>
    );
};

export default Header;
