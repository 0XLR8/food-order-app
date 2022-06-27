import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [engageModal, setEngageModal] = useState(false);
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        !items.length && setShowModal(false)
    }, [items])

    const handleAddItem = (item) => {
        setEngageModal(true);
        setTotalAmount(prev => Number((prev + item.price * item.amount).toFixed(2)))
        const existingCartItemIndex = items.findIndex(value => value.id === item.id)
        existingCartItemIndex < 0 ? 
            setItems(items.concat(item)) 
            : 
            setItems(items.map((value, index) => {
                existingCartItemIndex === index && (value.amount = value.amount + 1)
                return value;
            }))
    }

    const handleAmountIncr = (id) => {
        let selectedItem = items.findIndex(value => value.id === id);
        setTotalAmount(prev => Number((prev + items[selectedItem].price).toFixed(2)))
        setItems(items.map(value => {
            value.id === id && (value.amount = value.amount + 1)
            return value;
        }))
    }

    const handleAmountDecr = (id) => {
        let selectedItem = items.findIndex(value => value.id === id);
        items[selectedItem].amount > 1 ? 
            setItems(items.map(value => {
                value.id === id && (value.amount = value.amount - 1);
                return value;
            }))
            :
            setItems(items.filter(value => value.id !== id))
        setTotalAmount(prev => Number((prev - items[selectedItem].price).toFixed(2)))
    }

    const handleModal = () => {
        setShowModal(!showModal);
    }

    const formatItemAmount = (id) => {
        const itemElement = items.filter(val => val.id === id);
        return itemElement.length ? itemElement[0].amount : 0 
    }

    return(
        <CartContext.Provider value={{
            showModal,
            engageModal,
            items,
            totalAmount,
            handleModal,
            setEngageModal,
            handleAddItem,
            formatItemAmount,
            handleAmountIncr,
            handleAmountDecr
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;