import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartUI = () => {

    const { items, handleModal, engageModal } = useContext(CartContext)

    const itemsNumber = items.reduce((acc, curr) => acc + curr.amount, 0);

    const variants = {
        fixed: { scale: 1 },
        bounce: { scale: [0.9, 1.1, 1] }
    }

    return(
        <motion.div 
            key={Math.random()}
            className="cart-ui d-flex flex-row align-items-center"
            animate={engageModal ? "bounce" : "fixed"}
            transition={{duration: 0.3, transition: "ease-out"}}
            variants={variants}
            onClick={itemsNumber ? handleModal : null}
        >
            <FaShoppingCart className="me-2"/>
            <p className="me-2">Your Cart</p>
            <span>{itemsNumber}</span>
        </motion.div>
    )
}

export default CartUI;