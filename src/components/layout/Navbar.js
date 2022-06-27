import CartUI from "../cart/CartUI";

const Navbar = () => {
    return(
        <div className="nav-bar sticky-top p-2">
            <div className="container d-flex flex-row justify-content-between align-items-center">
                <h1 className="title">ReactMeals</h1>
                <CartUI />
            </div>
        </div>
    )
}

export default Navbar;