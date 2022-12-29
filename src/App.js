import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import {useState} from "react";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onClick={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </>
    );
}

export default App;
