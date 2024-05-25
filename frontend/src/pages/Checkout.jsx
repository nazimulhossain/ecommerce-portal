import { useNavigate, useSearchParams } from "react-router-dom";
import CheckoutCartDetails from "../features/checkout/CheckoutCartDetails";
import CheckoutDiscount from "../features/checkout/CheckoutDiscount";
import CheckoutInformation from "../features/checkout/CheckoutInformation";
import CheckoutTotal from "../features/checkout/CheckoutTotal";
import { useDispatch } from "react-redux";
import { open } from "../features/cart/cartSlice";
import { useReducer, useState } from "react";
import CheckoutBreadcrumb from "../features/checkout/CheckoutBreadcrumb";
import CheckoutShipping from "../features/checkout/CheckoutShipping";
import CheckoutPayment from "../features/checkout/CheckoutPayment";


function Checkout(){


    const [shippingRate,setShippingRate] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const step = searchParams.get("step");
    

    const navigate = useNavigate(); 

    const dispatch = useDispatch();

    const navigateToHome = ()=>{
        navigate("/");
        dispatch(open(false));
    }

    return (
        <div className="h-full  bg-[#fbf8f1] p-2 lg:p-16 lg:pt-6">
        <h2 className="text-3xl mb-2 lg:text-6xl lg:mb-5 tracking-widest hover:cursor-pointer"onClick={navigateToHome}>Aainagirl</h2>
            <CheckoutBreadcrumb step={step} />
        
        <div className="flex flex-col lg:grid lg:grid-cols-[0.55fr_0.45fr]">
            <div className=" border-r border-r-[#e2dfd9 ] order-1 lg:order-none">
            
           {step === 'contact_information' && <CheckoutInformation setShippingRate={setShippingRate} />} 
           {step === 'shipping_method' && <CheckoutShipping />}
           {step === 'payment_method' && <CheckoutPayment />}
            </div>
            <div className="p-0 lg:p-16 ">
                <div className="border-b border-[#c2c2c2] mb-6">
                <CheckoutCartDetails />
                </div>
                
                <CheckoutDiscount />
                <CheckoutTotal shippingRate={shippingRate}  />

            </div>
            
        </div>
        </div>
    )

}

export default Checkout;