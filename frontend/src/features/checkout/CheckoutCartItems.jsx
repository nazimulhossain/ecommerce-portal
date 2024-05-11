function CheckoutCartItems({item}){

    return (
        <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-4 py-2">
            <div className="bg-white py-2 px-4 rounded-xl relative border border-[#d5d3cd]">
            <img src={item.primaryImage} className="w-[30px]"  />
            <span className="absolute -top-2 -right-2 bg-[#727272e6] w-[20px] h-[20px] rounded-[50%] flex justify-center items-center text-white text-xs font-semibold">{item.qty}</span>
            </div>
                
                <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-[#71706c]">{item.selectedSize} / green</span>
                </div>                     
            </div>
            <span>{item.totalPrice}</span>
        </div>
    )

}

export default CheckoutCartItems;