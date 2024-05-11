import { MdAdd,MdHorizontalRule  } from "react-icons/md";
import { useIconSize } from "../../contexts/IconContext";
import { useState } from "react";

function ProductAccordion(){
    const {iconSize} = useIconSize();

    const [showAddIcon,setShowAddIcon] = useState(true);

    return(
        <div>
            <div>
                <div className="flex justify-between items-center border-y border-y-black mb-6 py-4 hover:cursor-pointer" onClick={()=> setShowAddIcon((show)=>!show)}>
                <h3>Details</h3>
                <span>{showAddIcon ? <MdAdd size={iconSize} /> : <MdHorizontalRule size={iconSize} /> }</span>
                </div>
                {
                    !showAddIcon &&  
                
                <ul className="list-disc list-inside">
                    <li>
                    63% Viscose, 37% Nylon
                    </li>
                    <li>
                    Dry Clean Only or Hand Wash Cold
                    </li>
                    <li>
                    Made in China
                    </li>
                </ul>
                }
            </div>
        </div>
    )

}

export default ProductAccordion;