import CartIcon from "../Card/CartIcon";
import styles from './HeaderCardButton.module.css'

function HeaderCartButton(props) {
    return <button onClick={props.onClick} className={styles.button}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
        </span>
        <span className={styles.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton;