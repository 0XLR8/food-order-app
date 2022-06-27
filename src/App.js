import Navbar from "./components/layout/Navbar";
import Home from "./components/routes/Home";
import Logo from "./assets/images/food-table.png";
import { CartProvider } from "./context/CartContext";
import CartModal from "./components/cart/CartModal";

const App = () => {
    return(
        <CartProvider>
            <Navbar />
            <div className="bg-image">
                <img src={Logo} alt="food" />
                <Home />
            </div>
            <CartModal />
        </CartProvider>
    )
}
export default App;