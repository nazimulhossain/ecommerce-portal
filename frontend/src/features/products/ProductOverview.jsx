import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./useProduct";

import Button from "../../ui/Button";
import ProductSize from "./ProductSize";
import ProductThumbnail from "./ProductThumbnail";
import ProductDetails from "./ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../cart/cartSlice";


function ProductOverview(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const {singleProduct,isLoading} = useProduct(id);
    const [currentImage,setCurrentImage] = useState();
    const [chooseSize,setChooseSize] = useState(function(){
        return singleProduct?.size[0]
    });


    const addToCartHandler = ()=>{
       
       const product=  {...singleProduct,selectedSize : chooseSize.toUpperCase(),sku : singleProduct.name + "-" +chooseSize };
        dispatch(addItem(product));
    }
    

    return (
        <>
        {
            !isLoading ?   <div>
            <div className="grid grid-cols-2 px-10 mb-9">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2 hover:cursor-pointer">
                        <img src={singleProduct.primaryImage} className="w-40" onClick={()=> setCurrentImage(singleProduct.primaryImage)}/>
                        {
                            singleProduct?.otherImages.map((thumbnail,i)=> <ProductThumbnail thumbnail={thumbnail} key={i} setCurrentImage={setCurrentImage} />)
                        }
                        
                    </div>
                    <div>
                        <img src={currentImage ? currentImage :singleProduct?.primaryImage} />
                    </div>
    
                </div>
                <div className="place-self-center text-center">
                    <div className="flex flex-col gap-2  border-b border-b-[#d8ccaf]">
                    <h2 className="text-6xl mb-6">{singleProduct?.name}</h2>
                    <p>{singleProduct?.description}</p>
                    <span className="border-b-2 border-b-black self-center">Full details</span>
                    <span className="mb-6">{singleProduct?.price}</span>
                    </div>
                    <div>
                    <span className="inline-block mt-6 mb-2">Select Size</span>
                    <div className="flex gap-2 mb-6 justify-center hover:cursor-pointer">
                        {singleProduct?.size.map((productSize,i)=> <ProductSize size={productSize} key={i} chooseSize={chooseSize} setChooseSize={setChooseSize} />)}
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