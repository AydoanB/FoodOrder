import styles from './Cart.module.css'
import Modal from "../UI/Modal";

function Cart(props) {

    const cartItems = <ul className={styles['cart-items']}>
        {[{id: 'c1', name: 'Sushi', amount: 2, price: 12}]
            .map((item) => <li>{item.name}</li>)}
    </ul>;

    return (<Modal onClose={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.26</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>)
}

export default Cart;