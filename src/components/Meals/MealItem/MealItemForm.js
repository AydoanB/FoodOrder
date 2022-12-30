import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {useRef, useState} from "react";

function MealItemForm(props) {
    const [isValid, setIsValid] = useState(true);
    const amountInputRef = useRef();

    const addItemHandler = (event) => {
        event.preventDefault();

        const enteredAmount = +(amountInputRef.current.value);

        if (enteredAmount < 1 || enteredAmount > 5) {
            setIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    }

    return <form onSubmit={addItemHandler} className={styles.form}>
        <Input label="Amount" ref={amountInputRef } input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}/>
        <button type="submit">+ Add</button>
        {!isValid && <p>Please enter valid amount! (1-5 portions allowed)</p>}
    </form>
}

export default MealItemForm;