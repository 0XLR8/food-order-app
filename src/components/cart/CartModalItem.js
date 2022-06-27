import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartModalItem = ({id, title, price, amount}) => {

    const { handleAmountDecr, handleAmountIncr } = useContext(CartContext);
    
    return(
        <div className="cart-modal-item pb-3 mb-3 d-flex justify-content-between align-items-center">
            <div>
                <p className="modal-title mb-2">{title}</p>
                <div className="modal-inner d-flex justify-content-between">
                    <p className="modal-price">{price.toFixed(2)}</p>
                    <p className="modal-amount">x {amount}</p>
                </div>
            </div>
            <div>
                <button className="modal-btn" onClick={() => {handleAmountDecr(id)}}>-</button>
                <button className="modal-btn" onClick={() => {handleAmountIncr(id)}}>+</button>
            </div>
        </div>
    )
}

export default CartModalItem;