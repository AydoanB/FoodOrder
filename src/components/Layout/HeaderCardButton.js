import CartIcon from "../Card/CartIcon";
import styles from './HeaderCardButton.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
    const ctx = useContext(CartContext)

    return <button onClick={props.onClick} className={styles.button}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
        </span>
        <span className={styles.badge}>
            {ctx.items.length}
        </span>
    </button>
}

export default HeaderCartButton;