import { BsSearch } from "react-icons/bs";
import { useIconSize } from "../contexts/IconContext";
function Search(){

    const {iconSize} = useIconSize();
    

    return(
        <>
        <BsSearch size={iconSize} />
        </>
    )

}

export default Search;