import styles from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
    const ctx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        };
        ctx.addItem(item);
    }
    return <li className={styles.meal} key={props.id}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={styles.description}>
                {props.description}
            </div>
            <div className={styles.price}>
                {price}
            </div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}

export default MealItem;