import { MdArrowBackIosNew } from "react-icons/md";

import ButtonCheckout from "../../ui/ButtonCheckout";
import { useNavigate } from "react-router-dom";

function CheckoutProgress({checkoutButton,onClick}){

    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
            <span><MdArrowBackIosNew size="14px"/></span>
            <p className="text-sm hover:cursor-pointer" onClick={()=> navigate(-1)}>Return to cart</p>
        </div>
        <div>
            <ButtonCheckout type="submit" onClick={onClick}>{checkoutButton}</ButtonCheckout>
        </div>
    </div>
    )

}

export default CheckoutProgress;