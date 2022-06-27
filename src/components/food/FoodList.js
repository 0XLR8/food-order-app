import FoodItem from "./FoodItem";
import { motion } from "framer-motion";

const FoodList = ({foodList}) => {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20},
    }

    return(
        <motion.div 
            initial="hidden"
            animate="visible"
            transition={{duration: 0.4}}
            variants={variants}
            className="food-list b-rad mx-auto my-4 px-4 py-2">
            {(foodList && foodList.length) && (
                foodList.map(value => {
                    return <FoodItem key={value.id} value={value} />
                })
            )}
        </motion.div>
    )
}

export default FoodList;