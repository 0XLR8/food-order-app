import FoodList from "../food/FoodList";
import { useState } from "react";

const Home = () => {

    const [foodList, setFoodList] = useState([
        { id: 1, title: "Sushi", description: "Finest fish and veggies", price: 22.99 },
        { id: 2, title: "Schnitzel", description: "A german speciality!", price: 16.50 },
        { id: 3, title: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
        { id: 4, title: "Green Bowl", description: "Healthy...and green...", price: 18.99 }
    ])

    return(
        <div className="home">
            <div className="section-1 b-rad text-center mx-auto p-3">
                <h1 className="title mb-4">Delicious Food, Delivered To You</h1>
                <p className="mb-3">Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
            <FoodList foodList={foodList} />
        </div>
    )
}

export default Home;