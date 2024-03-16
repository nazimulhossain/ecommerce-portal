import { useIconSize } from "../contexts/IconContext";
import { NavLink } from "react-router-dom";
import { BsPersonCircle,BsCart  } from "react-icons/bs";


import Search from "./Search";


function Header(){
    const {iconSize} = useIconSize();
    return(
        <header className="grid grid-cols-3 justify-items-center items-center p-4 bg-white fixed w-full">
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/new-arrivals">New Arrivals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover">Discover</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="text-3xl">Aainagirl</div>
            <div className="flex gap-6">
                <Search />
                <BsPersonCircle size={iconSize} />
                <BsCart size={iconSize} />
            </div>
        </header>
    )

}

export default Header;