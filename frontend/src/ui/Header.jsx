import { useIconSize } from "../contexts/IconContext";
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle,BsCart  } from "react-icons/bs";


import Search from "./Search";
import SocialIcon from "./SocialIcon";
import CartOverview from "../features/cart/CartOverview";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getCartOpenStatus, open } from "../features/cart/cartSlice";



function Header(){
    const cart = useSelector(getCartOpenStatus);
    const cartQuatity = useSelector(getCart);

    const dispatch = useDispatch();

    const {iconSize} = useIconSize();
    return(
        <header className="grid grid-cols-[0.5fr_1fr_0.5fr] justify-items-center items-center p-4 w-full text-black">
            <nav>
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
            <div className="flex gap-6 hover:cursor-pointer">
                <SocialIcon />
                <div className="flex gap-10">
                <Search />
                <BsPersonCircle size={iconSize} />
                <div className="relative">
                    <span><BsCart  size={iconSize} onClick={()=> dispatch(open(!cart))} /></span>
                    <span className="absolute -top-4 -right-4 w-[20px] h-[20px]  rounded-[50%] text-xs  border border-black flex items-center justify-center bg-black text-white">{cartQuatity.length}</span>
                </div>
                </div>
            </div>
            {cart && <CartOverview />}
           
        </header>
    )

}

export default Header;