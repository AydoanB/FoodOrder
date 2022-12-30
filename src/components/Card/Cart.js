import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
    const ctx = useContext(CartContext);

    const cartItemAddHandler = (item) => {
        ctx.addItem({...item, amount: 1});
    }
    const cartItemRemovedHandler = (id) => {
        ctx.removeItem(id);
    }

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItems = <ul className={styles['cart-items']}>
        {ctx.items.map((item) => <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemovedHandler.bind(null, item.id)}/>)}
    </ul>;

    return (<Modal onClose={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>)
}

export default Cart;