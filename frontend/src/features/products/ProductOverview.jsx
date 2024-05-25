import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./useProduct";

import Button from "../../ui/Button";
import ProductSize from "./ProductSize";
import ProductThumbnail from "./ProductThumbnail";
import ProductDetails from "./ProductDetails";
import { useDispatch} from "react-redux";
import { addItem} from "../cart/cartSlice";


function ProductOverview(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const {singleProduct,isLoading} = useProduct(id);
    const [currentImage,setCurrentImage] = useState();
    const [chooseSize,setChooseSize] = useState(function(){
        return singleProduct?.sizeName[0].sizeName
    });


    const addToCartHandler = ()=>{
       
       const product=  {...singleProduct,quantity: 1,totalPrice: singleProduct.price,selectedSize : chooseSize.toUpperCase(),sku : singleProduct.name + "-" +chooseSize };
        dispatch(addItem(product));
    }
    

    return (
        <>
        {
            !isLoading ?   <div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 px-10 mb-9">
                <div className="flex gap-2">
                    {/* <div className="flex flex-col gap-2 hover:cursor-pointer">
                        <img src={singleProduct.primaryImage} className="w-40" onClick={()=> setCurrentImage(singleProduct.primaryImage)}/>
                        {
                            singleProduct?.otherImagesDtos.map((thumbnail)=> <ProductThumbnail thumbnail={thumbnail.name} key={thumbnail.otherimagesId} setCurrentImage={setCurrentImage} />)
                        }
                        
                    </div> */}
                    <div className="mb-4">
                        <img src={currentImage ? currentImage :singleProduct?.primaryImage} />
                    </div>
    
                </div>
                <div className="place-self-center text-center">
                    <div className="flex flex-col gap-2  border-b border-b-[#d8ccaf]">
                    <h2 className="text-xl lg:text-6xl mb-2">{singleProduct?.name}</h2>
                    <p className="text-base lg:text-lg">{singleProduct?.description}</p>
                    <span className="border-b-2 border-b-black self-center">Full details</span>
                    <span className="mb-6">{singleProduct?.price}</span>
                    </div>
                    <div>
                    <span className="inline-block mt-6 mb-2 text-sm">Select Size</span>
                    <div className="flex gap-2 mb-6 justify-center hover:cursor-pointer">
                        {singleProduct?.sizeName.map((productSize,i)=> <ProductSize size={productSize.sizeName} key={i} chooseSize={chooseSize} setChooseSize={setChooseSize} />)}
                    </div>
                        
                    </div>
                    <Button type='add' onClick={addToCartHandler}>Add to Bag</Button>
    
    
                </div>
            </div>
             <ProductDetails />
            </div> : <h1>Loading....</h1>
        }
        
       
      
        </>
    )

}

export default ProductOverview;