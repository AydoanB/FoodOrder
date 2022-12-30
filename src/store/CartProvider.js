import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cardReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        let updatedItems = state.items;

        const existingCartItemIndex = updatedItems.findIndex(el => el.id === action.id);
        const existingItem = updatedItems[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;


        if (existingItem.amount > 1) {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.splice(existingCartItemIndex, 1);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;

