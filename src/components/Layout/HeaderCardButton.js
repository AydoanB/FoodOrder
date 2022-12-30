import CartIcon from "../Card/CartIcon";
import styles from './HeaderCardButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const ctx = useContext(CartContext)
    const numberOfItemsInCart = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (ctx.items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [ctx.items]);

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
        </span>
        <span className={styles.badge}>
            {numberOfItemsInCart}
        </span>
    </button>
}

export default HeaderCartButton;