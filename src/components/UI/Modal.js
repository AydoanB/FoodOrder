import styles from './Modal.module.css'
import ReactDOM from "react-dom";

function Backdrop(props) {
    return <div onClick={props.onClose} className={styles.backdrop}/>;
}

function ModalOverlay(props) {

    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}

const portalEl = document.getElementById('overlays');

function Modal(props) {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </>
}

export default Modal;