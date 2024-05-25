import { useIconSize } from "../contexts/IconContext";
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle,BsCart,BsList,BsXLg } from "react-icons/bs";


import Search from "./Search";
import SocialIcon from "./SocialIcon";
import CartOverview from "../features/cart/CartOverview";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getCartOpenStatus, open } from "../features/cart/cartSlice";
import { useState } from "react";



function Header(){
    const [mobileMenu, setMobileMenu] = useState(false);
    const cart = useSelector(getCartOpenStatus);
    const cartQuatity = useSelector(getCart);

    const dispatch = useDispatch();

    const {iconSize} = useIconSize();

    const onMobileMenuHandler = ()=> {
        setMobileMenu((show)=> !show);

    }
    return(
        <header className="flex items-center justify-between p-4 w-full text-black">
            {
               !mobileMenu ?  <BsList size={25} className="z-50 cursor-pointer lg:hidden" onClick={onMobileMenuHandler}/> 

                        :   <BsXLg  size={25} className="z-50 cursor-pointer lg:hidden" onClick={onMobileMenuHandler}/>
            }
            
          
            {
                mobileMenu && <div className="h-dvh w-screen text-center  fixed bg-white top-0 left-0 z-40" onClick={onMobileMenuHandler}>
                    <nav className="h-dvh">
                        <ul className="h-dvh flex flex-col justify-evenly font-semibold text-3xl">
                            <li>
                                <NavLink className="hover:border-b-2 hover:border-b-black" to="/new-arrivals">New Arrivals</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:border-b-2 hover:border-b-black" to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:border-b-2 hover:border-b-black" to="/discover">Discover</NavLink>
                            </li>
                        </ul>
            </nav>

                </div>
            }
            <nav className="hidden lg:block lg:px-4 ">
                <ul className="flex gap-8 font-semibold text-sm">
                    <li>
                        <NavLink className="hover:border-b-2 hover:border-b-black" to="/new-arrivals">New Arrivals</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:border-b-2 hover:border-b-black" to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:border-b-2 hover:border-b-black" to="/discover">Discover</NavLink>
                    </li>
                </ul>
            </nav>
            <Link to="/" className="text-3xl hover:cursor-pointer">Aainagirl</Link>
            <div className="hidden lg:flex lg:gap-2">
                <SocialIcon />
                <Search />
            </div>
            <div className="flex gap-6 hover:cursor-pointer">
               
                <div className="flex gap-6">
                
               <BsPersonCircle size={iconSize}  />
                <div className="relative">
                    <span><BsCart  size={iconSize} onClick={()=> dispatch(open(!cart))} /></span>
                    <span className="absolute -top-4 -right-3 w-[15px] h-[15px]  rounded-[50%] text-xs  border border-black flex items-center justify-center bg-black text-white">{cartQuatity.length}</span>
                </div>
                </div>
            </div>
            {cart && <CartOverview />}
           
        </header>
    )

}

export default Header;