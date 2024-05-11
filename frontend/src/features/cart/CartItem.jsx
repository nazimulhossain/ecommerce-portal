import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from "./cartSlice";

function CartItem({product,iconSize}){

    const dispatch = useDispatch();

    return (
        <div className="p-2 bg-white flex justify-between mb-6 ">
        <div className="flex">
        <img src={product.primaryImage} className="w-24" />
        <div className="flex flex-col justify-between items-center">
        <div>
            <h2>{product.name}</h2>
            <p>{`Size ${product.selectedSize}`}</p>
            <p>{product.color}</p>
        </div>
        <div className="flex gap-2 items-center border border-black px-1">
            <span onClick={()=> dispatch(decreaseQuantity(product))}><AiOutlineMinus size={iconSize} /></span>
            <p className="text-xl">{product.qty}</p>
            <span onClick={()=> dispatch(increaseQuantity(product))}><AiOutlinePlus size={iconSize}/></span>
        </div>
        </div>
        </div>
        <div className="flex flex-col justify-between">
            <p className="underline hover:cursor-pointer" onClick={()=> dispatch(deleteItem(product))}>Remove</p>
            <span>{product.price}</span>
        </div>
        </div>
   
    )

}

export default CartItem;