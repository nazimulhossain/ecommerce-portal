import { AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";
import { useIconSize } from "../contexts/IconContext";
function SocialIcon(){
    const {iconSize} = useIconSize();
    return(
        <div className="flex gap-4 border-r-2">
        <AiOutlineInstagram size={iconSize} />
        <AiOutlineFacebook size={iconSize} className="mr-5" />
        </div>
    )

}

export default SocialIcon;