import { useSelector } from "react-redux";
import CartOverview from "../features/cart/CartOverview";
import { getCart } from "../features/cart/cartSlice";


function Cart(){
    const cart = useSelector(getCart);

    return (
        <CartOverview />
    )

}

export default Cart;