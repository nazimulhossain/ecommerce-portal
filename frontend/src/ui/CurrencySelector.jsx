import { MdArrowDropDown } from "react-icons/md";
import { useIconSize } from "../contexts/IconContext";

function CurrencySelector(){

    const {iconSize} = useIconSize();


    return (
        <div className="flex items-center">
                <p>INR</p>
                <MdArrowDropDown size={iconSize} />

            </div>
    )

}

export default CurrencySelector;