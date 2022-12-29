import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCardButton";

function Header(props) {
    return (<>
        <header className={styles.header}>
            <h1>Hello from my food app</h1>
            <HeaderCartButton onClick={props.onClick}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Meal"/>
        </div>
    </>);
}

export default Header;