import { AiOutlineCloseCircle } from "react-icons/ai";

import Button from "../../ui/Button";
import { useIconSize } from "../../contexts/IconContext";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getCartOpenStatus, getTotalCartPrice, open } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import { useEffect } from "react";


function CartOverview(){
    const {iconSize} = useIconSize();
    const cartOpen = useSelector(getCartOpenStatus);
    const cart = useSelector(getCart);  
    
    const totalCartValue = useSelector(getTotalCartPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const className = cart.length>0 ? "p-6 h-dvh w-[450px] bg-[#ffe5d4]  z-[9999]  fixed top-0 right-0" : "p-6 h-dvh w-[450px] bg-[#ffe5d4]  z-[9999]  fixed top-0 right-0 grid place-items-center";
    
    return (
        <>
           <div className={className}>
           {
            cart.length > 0 ? <div className="grid grid-rows-[0.2fr_180px_1fr]">
            <div className="flex justify-between mb-4">
                <div className="flex gap-2 items-center">
                <h2 className="text-2xl">My Shopping Bag</h2>
                <span className="text-lg">{`${cart.length} item`}</span>
                </div>
               
            </div>

            <div className="overflow-y-scroll">
           
            {
                cart?.map((product,i)=> <CartItem key={i} product={product} iconSize={iconSize} />)
            }
            </div>
            <div className="flex flex-col text-lg py-4">
                <div className="flex justify-between mb-40">
                    <h3>Subtotal</h3>
                    <span>{`Rs.${totalCartValue}`}</span>

                </div>
                

                <Button type="add" onClick={()=> navigate("/checkout?step=contact_information")}>checkout</Button>
                
            </div>
            </div>

            : <EmptyCart />  
            
        

           }
            

            <span className="fixed top-5 right-4"><AiOutlineCloseCircle size={25} className="hover:cursor-pointer" onClick={()=> dispatch(open(!cartOpen))} /></span>

        </div>

        
        
        
       
        </>
    )

}

export default CartOverview;