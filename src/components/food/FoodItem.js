import { useContext } from "react";
import CartContext from "../../context/CartContext";

const FoodItem = ({value}) => {

    const { id, title, description, price } = value;
    const { handleAddItem, formatItemAmount } = useContext(CartContext)

    return(
        <div className="food-item py-3 d-flex justify-content-between align-items-center">
            <div>
                <p className="food-title">{title}</p>
                <p className="food-description my-1">{description}</p>
                <p className="food-price">${price.toFixed(2)}</p>
            </div>
            <div>
                <p className="food-title mb-2">Amount <input className="ms-2" type="number" readOnly value={formatItemAmount(id)} /></p>
                <button className="d-block mx-auto" onClick={() => handleAddItem({...value, amount: 1})} >Add</button>
            </div>
        </div>
    )
}

export default FoodItem;