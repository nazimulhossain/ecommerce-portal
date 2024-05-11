import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../cart/cartSlice";
import { useShippingRates } from "../../hooks/useShippingRate";
import { useState } from "react";

function CheckoutTotal({shippingRate}){

    

    const totalCartValue = useSelector(getTotalCartPrice);

   

    return (
        <>
        
        <div className="flex justify-between py-4 text-sm border-b border-[#c2c2c2]">
            <div className="text-[#686868]">
                <h3 className="mb-2">Subtotal</h3>
                <h3>Shipping</h3>
            </div>
            <div className="flex flex-col font-semibold">
                <span className="self-end mb-2">{totalCartValue}</span>
                <p>{!shippingRate ? 'Calculated at next step' : shippingRate}</p>
            </div>
        </div>
        <div className="flex justify-between py-4">
            <h3>Total</h3>
            <span className="font-semibold">{shippingRate + totalCartValue}</span>
        </div>
        
        </>
    )

}

export default CheckoutTotal;