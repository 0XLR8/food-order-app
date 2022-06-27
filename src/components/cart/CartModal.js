import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Modal } from "react-bootstrap";
import CartModalItem from "./CartModalItem";

const CartModal = () => {

    const {items, showModal, handleModal, totalAmount} = useContext(CartContext);

    return(
        <Modal 
            show={showModal} 
            onHide={handleModal}
            centered
        >
            <div className="cart-modal p-4">
                {
                    items.map(value => {
                        return  <CartModalItem 
                                    key={value.id} 
                                    id={value.id}
                                    title={value.title}
                                    price={value.price}
                                    amount={value.amount}
                                />
                    })
                }
                <div className="d-flex mb-3 justify-content-between">
                    <p className="modal-title">Total Amount</p>
                    <p className="modal-title">${totalAmount}</p>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="main-btn" onClick={handleModal}>Close</button>
                    <button className="main-btn active">Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default CartModal;