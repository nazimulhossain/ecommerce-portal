import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import CheckoutCartItems from "./CheckoutCartItems";

function CheckoutCartDetails(){

    const cart = useSelector(getCart);
    return(
        <div className="mb-6 hover:overflow-y-scroll overflow-hidden">
            <div className="max-h-[200px] ">
                {
                    cart?.map((item)=> <CheckoutCartItems key={item.sku} item={item} />)
                }
         
            </div>
        </div>
    )

}

export default CheckoutCartDetails;