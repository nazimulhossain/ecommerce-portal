import { useEffect, useState } from "react";
import ProductBadge from "../../ui/ProductBadge";
import { useNavigate } from "react-router-dom";


function ProductList({product}){
    const navigate = useNavigate();
    
    const [secondaryImage,showSecondaryImage] = useState(false);

    const {name,color,price,primaryImage,otherImages,id} = product;

    const productPageHandler=()=>{
        const productName = name.toLowerCase().split(" ").join("-");
        navigate(`/${productName}/${id}`);
    }

    

    return (
        <div className="bg-white text-center py-6 relative grid place-content-center" onClick={productPageHandler}>
            <img src={!secondaryImage ? primaryImage : otherImages[0]} className="hover:cursor-pointer mb-4 h-96" alt='product' onMouseEnter={()=> showSecondaryImage((show)=>!show)} onMouseLeave={()=> showSecondaryImage((show)=>!show)}/>
            <div className="flex flex-col gap-2 hover:cursor-pointer">
            <h3 className="text-lg">{name}</h3>
            <p className="text-[#686868] text-sm">{color}</p>
            <span className="text-sm">{price}</span>
            
            </div>
            <ProductBadge tag='New' />
            

        </div>
    )

}

export default ProductList;